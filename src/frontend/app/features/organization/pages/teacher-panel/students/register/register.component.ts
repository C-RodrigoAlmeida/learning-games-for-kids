import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/frontend/app/features/account/services/user.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { OrganizationRegisterStudent } from '../../../../organization/organization.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-students-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    providers: [DynamicDialogRef, DynamicDialogConfig],
    templateUrl: './register.component.html'
})
export class StudentRegisterComponent {
    registerForm: FormGroup;
    errorMessage: string = '';
    isLoading: boolean = false;
    showPassword = false;
    showConfirmPassword = false;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private organizationService: OrganizationService,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
    ) {
        this.registerForm = this.fb.nonNullable.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]],
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
        }, { validators: this.passwordMatchValidator });
    }

    private passwordMatchValidator(g: AbstractControl): ValidationErrors | null {
        const password = g.get('password')?.value;
        const confirmPassword = g.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { mismatch: true };
    }

    onSubmit(): void {
        if (this.registerForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            const { confirmPassword, ...userData } = this.registerForm.value;

            this.userService.createUser(userData).subscribe({
                next: (res: any) => {
                    let user: OrganizationRegisterStudent = { user: res.id }
                    this.organizationService.registerStudent(user).subscribe({
                        next: () => { },
                        complete: () => {
                            this.ref.close()
                        }
                    })
                },
                error: (error: any) => {
                    this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
                    this.isLoading = false;
                },
                complete: () => {
                    this.ref.close()
                }
            });
        }
    }

    get username() { return this.registerForm.get('username'); }
    get email() { return this.registerForm.get('email'); }
    get first_name() { return this.registerForm.get('first_name'); }
    get last_name() { return this.registerForm.get('last_name'); }
    get password() { return this.registerForm.get('password'); }
    get confirmPassword() { return this.registerForm.get('confirmPassword'); }
}

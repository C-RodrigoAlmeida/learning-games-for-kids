import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { LoginCredentials } from '../../models/auth.model';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string = '';
    isLoading: boolean = false;
    showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const credentials: LoginCredentials = this.loginForm.value;
      
      this.authService.login(credentials).subscribe({
        next: () => {
          this.router.navigate(['/organization']);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Algo deu errado. Tente novamente.';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

    navigateToRegister(): void {
        this.router.navigate(['/register']);
    }

      get username() { return this.loginForm.get('username'); }
      get password() { return this.loginForm.get('password'); }
}
  
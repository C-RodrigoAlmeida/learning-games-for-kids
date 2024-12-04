import { Component } from "@angular/core";
import { AcademicClassService } from "../../../academic-classes/academic-class.service";
import { MembershipService } from "../../../membership/membership.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { SidebarComponent } from "src/frontend/app/shared/components/sidebar/sidebar.component";
import { Membership } from "../../../membership/membership.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-class-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent],
  templateUrl: './class-register.component.html'
})
export class ClassRegisterComponent {

    form: FormGroup;
    teacherMemberships: Membership[] = [];
    studentMemberships: Membership[] = [];

    constructor(
        private academicClassService: AcademicClassService,
        private membershipService: MembershipService,
        private fb: FormBuilder,
        private router: Router,
    ){
        this.membershipService.getMemberships().subscribe(memberships => {
            this.teacherMemberships = memberships.results.filter(
                membership => membership.role === 'teacher' || membership.role === 'admin'
            );
            
            this.studentMemberships = memberships.results.filter(
                membership => membership.role === 'student'
            );
        });

        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            teacher: ['', Validators.required],
            students: this.fb.array([])
        });
    }

    onCheckboxChange(event: any) {
        const selections = this.form.controls['students'] as FormArray;
        if (event.target.checked) {
        selections.push(this.fb.nonNullable.control(parseInt(event.target.value, 10)));
        } else {
        const index = selections.controls.findIndex(x => x.value === parseInt(event.target.value, 10));
        selections.removeAt(index);
        }
    }
    onSubmit(){
        const formData = {
            name: this.form.get('name')?.value,
            teacher: this.form.get('teacher')?.value,
            students: this.form.get('students')?.value
        }

        this.academicClassService.createAcademicClass(formData).subscribe(response => {
            this.router.navigate(['/classes']);
        });
    }
}

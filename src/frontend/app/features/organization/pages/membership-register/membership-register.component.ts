import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MembershipRegistration } from '../../membership/membership.model';
import { Organization } from '../../organization/organization.model';
import { MembershipService } from '../../membership/membership.service';
import { OrganizationService } from '../../organization/organization.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './membership-register.component.html'
})
export class MembershipRegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  organization: Organization;
  id: number;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private membershipService: MembershipService,
    private organizationService: OrganizationService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.organizationService.getOrganization(this.id).subscribe((data: any) => {
      console.log(data);
      this.organization = data;
    });

    this.registerForm = this.fb.nonNullable.group({
      role: ['', [Validators.required]],
    });
  }

  navigateToOrgSelection(): void {
    this.router.navigate(['/organization/selection']);
  }


  onSubmit(): void {
    if (!this.registerForm.valid) return;

    this.isLoading = true;
    this.errorMessage = '';

    const membership: MembershipRegistration = {
      role: this.registerForm.value.role,
      organization: this.organization.id
    }

    this.membershipService.createMembership(membership).subscribe({
      next: () => {
        this.router.navigate(['/organization/selection']);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'O registro falhou. Por favor, tente novamente.';
        this.isLoading = false;
      }
    });
  }


  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get description() { return this.registerForm.get('description'); }
} 
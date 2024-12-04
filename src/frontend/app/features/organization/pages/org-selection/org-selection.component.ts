import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Membership } from '../../membership/membership.model';
import { Organization } from '../../organization/organization.model';
import { OrganizationService } from '../../organization/organization.service';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './org-selection.component.html'
})
export class OrganizationSelectionComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private organizationService: OrganizationService
    
  ){
    this.membershipRegisterForm = this.fb.nonNullable.group({
      organization: ['', [Validators.required]]
    });

    this.organizationService.getMemberOrganizations().subscribe((data: any) => {
      console.log(data);
      this.memberships = data;
    });

    this.organizationService.getNotMemberOrganizations().subscribe((data: any) => {
      this.organizations = data;
    });
  } 

  memberships: Membership[] = [];
  membershipRegisterForm: FormGroup;
  organizations: Organization[] = [];

  navigateToPanel(membership: Membership): void {
    if (membership.role === 'teacher' || membership.role === 'admin'){
      this.router.navigate(['teacher/panel']);
    }
    else {
      this.router.navigate(['student/panel']);
    } 
      
  }

  navigateToOrganizationRegister(): void {
    this.router.navigate(['organization/register']);
  }

  onSubmit(): void {
    if (!this.membershipRegisterForm.valid) return;

    const { organization } = this.membershipRegisterForm.value;
    

    this.router.navigate(['membership/register', organization]);
  }


}

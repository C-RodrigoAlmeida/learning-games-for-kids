import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Membership } from '../../membership/membership.model';
import { Organization } from '../../organization/organization.model';
import { OrganizationService } from '../../organization/organization.service';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection.component.html'
})
export class SelectionComponent {
  constructor(
    private organizationService: OrganizationService,
    private router: Router,
    
  ) {
    this.organizationService.getMemberOrganizations().subscribe((data: any) => {
      this.memberships = data;
    });

    this.organizationService.getNotMemberOrganizations().subscribe((data: any) => {
      this.organizations = data;
    });
  } 

  memberships: Membership[] = [];
  organizations: Organization[] = [];

  goToPanel(membership: Membership) {
    if (membership.role === 'teacher' || membership.role === 'admin') {
      this.router.navigate(['teacher-panel']);
    } else {
      this.router.navigate(['student-panel']);
    }
  }
}

import { Component } from '@angular/core';
import { OrganizationService } from '../../organization/organization.service';
import { Router } from '@angular/router';
import { Organization } from '../../organization/organization.model';
import { CommonModule } from '@angular/common';

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
    this.organizationService.getOrganizations().subscribe((data: any) => {
      console.log(data);
      this.organizations = data.results;
    });
  }

  organizations: Organization[] = [];
}

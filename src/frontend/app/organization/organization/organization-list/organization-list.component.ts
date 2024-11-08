import { Component, OnInit } from '@angular/core';

import { Organization } from '../organization.model';
import { OrganizationService } from '../organization.service';
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.css'
})
export class OrganizationListComponent implements OnInit {
  
  constructor(
    private _organizationService: OrganizationService
  ){}

  ngOnInit(): void {
    this._organizationService.getOrganizations().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<Organization>[] = [
    { label: 'Nome', key: 'name' as keyof Organization },
    { label: 'Descrição', key: 'description' as keyof Organization },
    { label: 'Criado em', key: 'created_at' as keyof Organization },
    { label: 'Atualizado em', key: 'updated_at' as keyof Organization }
  ];

  rows: Organization[] = [];
}

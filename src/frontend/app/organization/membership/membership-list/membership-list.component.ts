import { Component, OnInit } from '@angular/core';

import { Membership } from '../membership.model';
import { MembershipService } from '../membership.service';
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-membership-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './membership-list.component.html',
  styleUrl: './membership-list.component.css'
})
export class MembershipListComponent implements OnInit {
  
  constructor(
    private _membershipService: MembershipService
  ){}

  ngOnInit(): void {
    this._membershipService.getMemberships().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<Membership>[] = [
    { label: 'Nome', key: 'user.first_name' as keyof Membership },
    { label: 'Sobrenome', key: 'user.last_name' as keyof Membership },
    { label: 'Função', key: 'role' as keyof Membership },
    { label: 'Organização', key: 'organization.name' as keyof Membership },
    { label: 'Criado em', key: 'created_at' as keyof Membership },
    { label: 'Atualizado em', key: 'updated_at' as keyof Membership }
  ];

  rows: Membership[] = [];
}

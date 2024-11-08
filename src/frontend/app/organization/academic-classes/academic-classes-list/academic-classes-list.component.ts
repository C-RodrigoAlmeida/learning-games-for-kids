import { Component, OnInit } from '@angular/core';

import { AcademicClass } from '../academic-class.model';
import { AcademicClassService } from '../academic-class.service';
import { TableHeader } from 'src/frontend/app/core/models/table-header.model'
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';

@Component({
  selector: 'app-academic-classes-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './academic-classes-list.component.html',
  styleUrl: './academic-classes-list.component.css'
})
export class AcademicClassesListComponent implements OnInit {
  
  constructor(
    private _academicClassService: AcademicClassService
  ){}

  ngOnInit(): void {
    this._academicClassService.getAcademicClasses().subscribe((data: any) => {
      console.log(data);
      this.rows = data.results;
    });
    
  }

  headers: TableHeader<AcademicClass>[] = [
    { label: 'Turma', key: 'name' as keyof AcademicClass },
    // { label: 'Alunos', key: 'user.first_name' as keyof AcademicClass },
    { label: 'Professor', key: 'teacher.first_name' as keyof AcademicClass },
    { label: 'Organização', key: 'organization.name' as keyof AcademicClass },
    { label: 'Criado em', key: 'created_at' as keyof AcademicClass },
    { label: 'Atualizado em', key: 'updated_at' as keyof AcademicClass }
  ];

  rows: AcademicClass[] = [];
}

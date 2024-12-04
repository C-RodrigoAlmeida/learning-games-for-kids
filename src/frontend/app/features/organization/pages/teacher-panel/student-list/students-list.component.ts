import { Component, OnInit } from '@angular/core';
import { Student } from '../../../student/student.model';
import { StudentService } from '../../../student/student.service';
import { TableComponent } from 'src/frontend/app/shared/components/table/table.component';
import { Accessors } from 'src/frontend/app/core/models/accessors.model';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';

@Component({
    selector: 'app-students-list',
    standalone: true,
    imports: [TableComponent, SidebarComponent],
    templateUrl: './students-list.component.html'
})
export class StudentsListComponent implements OnInit {

    constructor(
        private _studentService: StudentService
    ) { }

    ngOnInit(): void {
        this._studentService.getList().subscribe((data: any) => {
            console.log(data);
            this.rows = data.results;
        });
    }

    headers: Accessors<Student>[] = [
        { label: 'Nome', key: 'user.first_name' + 'user.last_name' as keyof Student },
        { label: 'Email', key: 'user.email' as keyof Student },
        { label: 'Organização', key: 'organization.name' as keyof Student },
        { label: 'Criado em', key: 'created_at' as keyof Student },
        { label: 'Ativo', key: 'is_active' as keyof Student }
    ];

    rows: Student[] = [];
}

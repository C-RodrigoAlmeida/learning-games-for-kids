import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../student/student.service';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';
import { MembershipUpdate, MembershipView } from '../../../../membership/membership.model';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StudentRegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-students-list',
    standalone: true,
    imports: [CommonModule, DialogModule, SidebarComponent, StudentRegisterComponent],
    providers: [DialogService, DynamicDialogRef],
    templateUrl: './list.component.html'
})
export class StudentsListComponent implements OnInit {

    organization_id: number
    students: MembershipView[] = [];
    selectedStudent: MembershipView;
    registerMembershipVisible: boolean = false;

    constructor(
        private _studentService: StudentService,
        private dialogService: DialogService,
        public ref: DynamicDialogRef,
    ) { }

    ngOnInit(): void {
        this.getStudents();
    }

    getStudents() {
        this._studentService.getStudents().subscribe((data: any) => {
            console.log("data: ", data);
            this.students = data;
            this.organization_id = data[0].organization_id;
        });
    }

    createStudent() {
        const ref = this.dialogService.open(StudentRegisterComponent, {
            width: '50vw',
            modal: true,
            data: this.organization_id
        });
        ref.onClose.subscribe((any) => {
            setTimeout(() => { this.getStudents() }, 100);
        });
    }

    studentUpdateActiveStatus(student: MembershipView) {
        let body: MembershipUpdate = { is_active: !student.is_active }
        this._studentService.changeStudentActiveStatus(student.id, body).subscribe((data: any) => {
            this.getStudents()
        });
    }
}

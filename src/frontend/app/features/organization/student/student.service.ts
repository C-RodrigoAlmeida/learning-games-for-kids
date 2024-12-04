import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { Membership, MembershipUpdate } from '../membership/membership.model';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    path = '/organization/student/';
    pathMembership = '/membership/';

    constructor(
        private apiService: ApiService,
        private http: HttpClient
    ) { }

    getStudents(): Observable<PaginatedResponse<Student>> {
        console.log(`${this.apiService.getUrl()}${this.path}`)
        return this.http.get<PaginatedResponse<Student>>(`${this.apiService.getUrl()}${this.path}`);
    }

    changeStudentActiveStatus(studentId: number, body: any): Observable<any> {
        return this.http.put<Membership>(`${this.apiService.getUrl()}${this.pathMembership}${studentId}/`, body);
    }
}

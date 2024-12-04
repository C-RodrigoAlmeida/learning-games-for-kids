import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';
import { Student } from './student.model';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    endpointURL = '/academic_classes/';

    constructor(private apiService: ApiService) { }

    get(id: number): Observable<Student> {
        return this.apiService.getOne<Student>(`${this.endpointURL}${id}`);
    }

    getList(): Observable<PaginatedResponse<Student>> {
        return this.apiService.get<Student>(this.endpointURL);
    }

    create(Student: Student): Observable<Student> {
        return this.apiService.post<Student>(this.endpointURL, Student);
    }

    update(Student: Student): Observable<Student> {
        return this.apiService.put<Student>(this.endpointURL, Student);
    }

    delete(id: number): Observable<Student> {
        return this.apiService.delete<Student>(`${this.endpointURL}${id}`);
    }
}

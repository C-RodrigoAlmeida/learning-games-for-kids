import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AcademicClass } from './academic-class.model';
import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse } from '../../core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class AcademicClassService {
    endpointURL = '/academic_classes/';

    constructor(private apiService: ApiService) {}

    getAcademicClass(id: number): Observable<AcademicClass> {
        return this.apiService.getOne<AcademicClass>(`${this.endpointURL}${id}`);
    }

    getAcademicClasses(): Observable<PaginatedResponse<AcademicClass>> {
        return this.apiService.get<AcademicClass>(this.endpointURL);
    }

    createAcademicClass(academicClass: AcademicClass): Observable<AcademicClass> {
        return this.apiService.post<AcademicClass>(this.endpointURL, academicClass);
    }

    updateAcademicClass(academicClass: AcademicClass): Observable<AcademicClass> {
        return this.apiService.put<AcademicClass>(this.endpointURL, academicClass);
    }

    deleteAcademicClass(id: number): Observable<AcademicClass> {
        return this.apiService.delete<AcademicClass>(`${this.endpointURL}${id}`);
    }
}

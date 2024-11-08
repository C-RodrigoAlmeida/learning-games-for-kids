import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { AcademicClass } from './academic-class.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/academic_classes/';

    constructor(private http: HttpClient) {
        super();
    }

    getAcademicClass(id: number): Observable<AcademicClass> {
        return this.http.get<AcademicClass>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    getAcademicClasses(): Observable<AcademicClass[]> {
        return this.http.get<AcademicClass[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createAcademicClass(academicClass: AcademicClass): Observable<AcademicClass> {
        return this.http.post<AcademicClass>(
            this.UrlServiceV1 + this.endpointName,
            academicClass,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError));
    }

    updateAcademicClass(academicClass: AcademicClass): Observable<AcademicClass> {
        return this.http.put<AcademicClass>(
            this.UrlServiceV1 + this.endpointName + academicClass.id,
            academicClass,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError));
    }

    deleteAcademicClass(id: number): Observable<AcademicClass> {
        return this.http.delete<AcademicClass>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }
}

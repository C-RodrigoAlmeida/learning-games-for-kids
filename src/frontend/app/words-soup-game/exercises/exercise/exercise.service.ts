import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { Exercise } from './exercise.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/exercise/';

    constructor(private http: HttpClient) {
        super();
    }

    getExercise(id: number): Observable<Exercise> {
        return this.http.get<Exercise>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError))
    }

    gets(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createExercise(exercise: Exercise): Observable<Exercise> {
        return this.http.post<Exercise>(
            this.UrlServiceV1 + this.endpointName,
            exercise,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    updateExercise(exercise: Exercise): Observable<Exercise> {
        return this.http.put<Exercise>(
            this.UrlServiceV1 + this.endpointName + exercise.id,
            exercise,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    deleteExercise(id: number): Observable<Exercise> {
        return this.http.delete<Exercise>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        )
    }
}
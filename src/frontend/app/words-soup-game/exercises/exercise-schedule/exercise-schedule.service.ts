import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { ExerciseSchedule } from './exercise-schedule.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/exercise_schedule/';

    constructor(private http: HttpClient) {
        super();
    }

    getExerciseSchedule(id: number): Observable<ExerciseSchedule> {
        return this.http.get<ExerciseSchedule>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError))
    }

    gets(): Observable<ExerciseSchedule[]> {
        return this.http.get<ExerciseSchedule[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createExerciseSchedule(exerciseSchedule: ExerciseSchedule): Observable<ExerciseSchedule> {
        return this.http.post<ExerciseSchedule>(
            this.UrlServiceV1 + this.endpointName,
            exerciseSchedule,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    updateExerciseSchedule(exerciseSchedule: ExerciseSchedule): Observable<ExerciseSchedule> {
        return this.http.put<ExerciseSchedule>(
            this.UrlServiceV1 + this.endpointName + exerciseSchedule.id,
            exerciseSchedule,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    deleteExerciseSchedule(id: number): Observable<ExerciseSchedule> {
        return this.http.delete<ExerciseSchedule>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        )
    }
}

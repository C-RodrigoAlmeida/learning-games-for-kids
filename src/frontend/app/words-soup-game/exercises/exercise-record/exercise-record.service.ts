import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/frontend/app/core/services/base.service';
import { ExerciseRecord } from './exercise-record.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService extends BaseService {
    page: any;
    rows: any;
    search = '';
    endpointName = '/exercise_record/';

    constructor(private http: HttpClient) {
        super();
    }

    getExerciseRecord(id: number): Observable<ExerciseRecord> {
        return this.http.get<ExerciseRecord>(
            this.UrlServiceV1 + this.endpointName + id,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError))
    }

    getExerciseRecords(): Observable<ExerciseRecord[]> {
        return this.http.get<ExerciseRecord[]>(
            this.UrlServiceV1 + this.endpointName,
            super.ObterAuthHeaderJson()
        ).pipe(catchError(super.serviceError));
    }

    createExerciseRecord(exerciseRecord: ExerciseRecord): Observable<ExerciseRecord> {
        return this.http.post<ExerciseRecord>(
            this.UrlServiceV1 + this.endpointName,
            exerciseRecord,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    updateExerciseRecord(exerciseRecord: ExerciseRecord): Observable<ExerciseRecord> {
        return this.http.put<ExerciseRecord>(
            this.UrlServiceV1 + this.endpointName + exerciseRecord.id,
            exerciseRecord,
            this.ObterAuthHeaderJson()
        ).pipe(map(this.extractData), catchError(this.serviceError))
    }

    deleteExerciseRecord(id: number): Observable<ExerciseRecord> {
        return this.http.delete<ExerciseRecord>(
            this.UrlServiceV1 + this.endpointName + id,
            this.ObterAuthHeaderJson()
        )
    }
}

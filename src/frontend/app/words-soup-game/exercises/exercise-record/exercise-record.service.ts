import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ExerciseRecord } from './exercise-record.model';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class ExerciseRecordService {
    endpointURL = '/exercise_records/';

    constructor(private apiService: ApiService) {}

    getExerciseRecord(id: number): Observable<ExerciseRecord> {
        return this.apiService.getOne<ExerciseRecord>(`${this.endpointURL}${id}`);
    }

    getExerciseRecords(): Observable<PaginatedResponse<ExerciseRecord>> {
        return this.apiService.get<ExerciseRecord>(this.endpointURL);
    }

    createExerciseRecord(exerciseRecord: ExerciseRecord): Observable<ExerciseRecord> {
        return this.apiService.post<ExerciseRecord>(this.endpointURL, exerciseRecord);
    }

    updateExerciseRecord(exerciseRecord: ExerciseRecord): Observable<ExerciseRecord> {
        return this.apiService.put<ExerciseRecord>(this.endpointURL, exerciseRecord);
    }

    deleteExerciseRecord(id: number): Observable<ExerciseRecord> {
        return this.apiService.delete<ExerciseRecord>(`${this.endpointURL}${id}`);
    }
}

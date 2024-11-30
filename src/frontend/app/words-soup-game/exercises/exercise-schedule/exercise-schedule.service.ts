import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ExerciseSchedule } from './exercise-schedule.model';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class ExerciseScheduleService{
    endpointURL = '/exercise_schedules/';

    constructor(private apiService: ApiService) {}

    getExerciseSchedule(id: number): Observable<ExerciseSchedule> {
        return this.apiService.getOne<ExerciseSchedule>(`${this.endpointURL}${id}`);
    }

    getExerciseSchedules(): Observable<PaginatedResponse<ExerciseSchedule[]>> {
        return this.apiService.get<ExerciseSchedule[]>(this.endpointURL);
    }

    createExerciseSchedule(exerciseSchedule: ExerciseSchedule): Observable<ExerciseSchedule> {
        return this.apiService.post<ExerciseSchedule>(this.endpointURL, exerciseSchedule);
    }

    updateExerciseSchedule(exerciseSchedule: ExerciseSchedule): Observable<ExerciseSchedule> {
        return this.apiService.put<ExerciseSchedule>(this.endpointURL, exerciseSchedule);
    }

    deleteExerciseSchedule(id: number): Observable<ExerciseSchedule> {
        return this.apiService.delete<ExerciseSchedule>(`${this.endpointURL}${id}`);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from './exercise.model';
import { ApiService } from 'src/frontend/app/core/services/api.service';
import { PaginatedResponse } from 'src/frontend/app/core/models/paginated-response.interface';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    endpointURL = '/exercises/';

    constructor(private apiService: ApiService) {}
    
    createExercise(exercise: any): Observable<Exercise> {
        return this.apiService.post<Exercise>(this.endpointURL, exercise);
    }
    
    getExercise(id: number): Observable<Exercise> {
        return this.apiService.getOne<Exercise>(`${this.endpointURL}${id}/`);
    }

    getExercises(): Observable<PaginatedResponse<Exercise>> {
        return this.apiService.get<Exercise>(this.endpointURL);
    }


    updateExercise(id: number, exercise: Exercise): Observable<Exercise> {
        return this.apiService.put<Exercise>(`${this.endpointURL}${id}/`, exercise);
    }

    deleteExercise(id: number): Observable<Exercise> {
        return this.apiService.delete<Exercise>(`${this.endpointURL}${id}/`);
    }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseService } from '../../exercises/exercise/exercise.service';
import { Exercise } from '../../exercises/exercise/exercise.model';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';


@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './exercise-list.component.html'
})
export class ExerciseListComponent {
  constructor(
    private router: Router,
    private exerciseService: ExerciseService,
    
  ){

    this.exerciseService.getExercises().subscribe((data: any) => {
      console.log(data);
      this.exercises = data.results;
    });

  } 

  getWrongWords(exercise: any): string {
    return exercise.wrong_words.map((word: any) => word.name).join(', ');
  }
  

  exercises: Exercise[] = [];

  navigateToExerciseSchedule(exerciseId: number) {
    this.router.navigate(['/exercise/schedule/', exerciseId]);
  }

  exerciseDelete(exerciseId: number) {
    this.exerciseService.deleteExercise(exerciseId).subscribe(() => {
      next: () => {
        this.exercises = this.exercises.filter(exercise => exercise.id !== exerciseId);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Word } from '../../words/words.model';
import { Exercise } from '../../exercises/exercise/exercise.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ExerciseRecordService } from '../../exercises/exercise-record/exercise-record.service';
import { ExerciseScheduleService } from '../../exercises/exercise-schedule/exercise-schedule.service';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play.component.html'
})
export class PlayComponent {

    words: Word[] = [];
    exercise: Exercise;
    exerciseForm: FormGroup;
    
    constructor(
        private exerciseRecordService: ExerciseRecordService,
        private exerciseScheduleService: ExerciseScheduleService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ){
        this.exerciseForm = this.formBuilder.group({
          words: new FormArray([])
        });

        this.route.params.subscribe(params => {
            this.exerciseScheduleService.getExerciseSchedule(1).subscribe(exerciseSchedule => {
                this.exercise = exerciseSchedule.exercise;
                this.words = [exerciseSchedule.exercise.correct_word, ...exerciseSchedule.exercise.wrong_words].sort(() => Math.random() - 0.5);
            });
        });
    }

    onCheckboxChange(event: any) {
      const selections = this.exerciseForm.controls['words'] as FormArray;
      if (event.target.checked) {
        selections.push(this.formBuilder.nonNullable.control(parseInt(event.target.value, 10)));
      } else {
        const index = selections.controls.findIndex(x => x.value === parseInt(event.target.value, 10));
        selections.removeAt(index);
      }
    }

    onSubmit(){
      const fd = new FormData();
      fd.append('exercise', this.exercise.id.toString());
      const uniqueWords = [...new Set(this.exerciseForm.value.words)];
      fd.append('selected_words', JSON.stringify(uniqueWords));

      let correctCount = 0;
      let wrongCount = 0;

      this.exerciseForm.value.words.forEach(selectedWordId => {
        if (selectedWordId === this.exercise.correct_word.id) {
          correctCount++;
        } else {
          wrongCount++;
        }
      });

      fd.append('amount_of_correct_words', correctCount.toString());
      fd.append('amount_of_wrong_words', wrongCount.toString());

      // this.exerciseRecordService.createExerciseRecord(fd).subscribe(() => {
      //   this.router.navigate(['/exercise/result']);
      // });
      
      this.router.navigate(['/exercise/result']);
    }
}
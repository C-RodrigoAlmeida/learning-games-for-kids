import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { Exercise } from '../exercise.model';
import { Word } from '../../../words/words.model';
import { ExerciseService } from '../exercise.service';
import { WordService } from '../../../words/words.service';

@Component({
    selector: 'app-exercise-form',
    standalone: true,
    imports: [],
    templateUrl: './word-form.component.html',
  })
  export class ExerciseFormComponent implements OnInit {
    constructor(
      private _formBuilder: FormBuilder,
      private _wordService: WordService,
      private _exerciseService: ExerciseService,
      private _activatedRoute: ActivatedRoute
    ) {}
  
    exerciseForm: FormGroup = new FormGroup({});

    ngOnInit(): void {
      // this.exerciseForm = this._formBuilder.group({
      //   break
      // })


    //   const id = this._activatedRoute.snapshot.paramMap.get('id');
      
    //   if (id) {
    //     this._exerciseService.getExercise(Number(id)).subscribe((data: Exercise) => {
    //       this.updateFieldValues(data);
    //     });
    //   }else{
    //     this._wordService.getWords().subscribe((data: Word[]) => {
    //        this.updateFieldValues(data);
    //   });
    //   }
    // }
  
    // updateFieldValues(data: any) {
    //   this.formConfig.forEach((field) => {
    //     if (data[field.name] !== undefined) {
    //       field.value = data[field.name];
    //     }
    //   });
    // }
  
    // onFormSubmit(formData: Exercise) {
    //   const id = this._activatedRoute.snapshot.paramMap.get('id');
  
    //   if (id) {
    //     this._exerciseService.updateExercise(Number(id), formData).subscribe((response: any) => {
    //       console.log('Update successful:', response);
    //     });
    //   } else {
    //     this._exerciseService.createExercise(formData).subscribe((response: any) => {
    //       console.log('Creation successful:', response);
    //     });
    //   }
    }
}
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Word } from '../../words/words.model';
import { CommonModule } from '@angular/common';

import { WordService } from '../../words/words.service';
import { ExerciseService } from '../../exercises/exercise/exercise.service';
import { Exercise } from '../../exercises/exercise/exercise.model';


@Component({
  selector: 'app-exercise-registration',
  templateUrl: './exercise-registration.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ExerciseRegistrationComponent {
  exerciseForm: FormGroup;
  availableWords: Word[] = [];
  isLoading = false;
  errorMessage = '';
  selectedFileName: string = '';
  imagePreview: string | null = null;

  constructor(
    private wordService: WordService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.exerciseForm = this.formBuilder.nonNullable.group({
      title: ['', Validators.required],
      wrongWords: this.formBuilder.nonNullable.array([]),
      correctWord: [null, Validators.required]
    });
    this.wordService.getWords().subscribe(words => {
      console.log(words);
      this.availableWords = words.results;
    });
  }

  onSubmit() {
    if (this.exerciseForm.valid) {
      this.isLoading = true;
      const formData = this.exerciseForm.value;
    }
  }

  onCancel() {
    this.router.navigate(['/exercises']);
  }


  onCheckboxChange(event: any) {
    const selections = this.exerciseForm.controls['wrongWords'] as FormArray;
    if (event.target.checked) {
      selections.push(this.formBuilder.nonNullable.control(event.target.value));
    } else {
      const index = selections.controls.findIndex(x => x.value === event.target.value);
      selections.removeAt(index);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
      
      this.exerciseForm.patchValue({
        image: file
      });
    }
  }
  
  get title() { return this.exerciseForm.get('title'); }
  get wrongWords() { return this.exerciseForm.get('wrongWords'); }
  get correctWord() { return this.exerciseForm.get('correctWord'); }
}

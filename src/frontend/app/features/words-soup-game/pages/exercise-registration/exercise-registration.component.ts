import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Word } from '../../words/words.model';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { WordService } from '../../words/words.service';
import { ExerciseService } from '../../exercises/exercise/exercise.service';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';


@Component({
  selector: 'app-exercise-registration',
  templateUrl: './exercise-registration.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent]
})
export class ExerciseRegistrationComponent {
  exerciseForm: FormGroup;
  availableWords: Word[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private exerciseService: ExerciseService,
    private wordService: WordService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.exerciseForm = this.formBuilder.nonNullable.group({
      title: ['', Validators.required],
      wrongWords: this.formBuilder.nonNullable.array([]),
      correctWord: [null, Validators.required],
      isPublic: ['', Validators.required],
      image: [null, Validators.required],
    });
    this.wordService.getWords().subscribe(words => {
      console.log(words);
      this.availableWords = words.results;
    });
  }

  onSubmit() {
    if (!this.exerciseForm.valid) return;
    this.isLoading = true;
  
    const fd = new FormData();
    fd.append('title', this.exerciseForm.get('title')?.value);
    fd.append('image', this.exerciseForm.get('image')?.value);
  
    // Append each wrong word individually to FormData
    const wrongWords = this.exerciseForm.get('wrongWords')?.value || [];
    wrongWords.forEach((word: number) => {
      fd.append('wrong_words', word.toString());
    });
  
    fd.append('correct_word', this.exerciseForm.get('correctWord')?.value);
    fd.append('is_public', this.exerciseForm.get('isPublic')?.value);

    this.exerciseService.createExercise(fd).subscribe({
      next: () => {
        this.router.navigate(['/exercises']);
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = error.error?.message || 'Algo deu errado. Tente novamente.';
        this.isLoading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(['/exercises']);
  }

  onCheckboxChange(event: any) {
    const selections = this.exerciseForm.controls['wrongWords'] as FormArray;
    if (event.target.checked) {
      selections.push(this.formBuilder.nonNullable.control(parseInt(event.target.value, 10)));
    } else {
      const index = selections.controls.findIndex(x => x.value === parseInt(event.target.value, 10));
      selections.removeAt(index);
    }
  }
  

  onFilechange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.exerciseForm.patchValue({ image: file });
      this.exerciseForm.get('image')?.updateValueAndValidity();
    }
  }

  
  get title() { return this.exerciseForm.get('title'); }
  get wrongWords() { return this.exerciseForm.get('wrongWords'); }
  get correctWord() { return this.exerciseForm.get('correctWord'); }
  get isPublic() { return this.exerciseForm.get('isPublic'); }
  get image() { return this.exerciseForm.get('image'); }
}

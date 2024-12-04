import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Word } from '../../words/words.model';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { WordService } from '../../words/words.service';
import { Exercise } from '../../exercises/exercise/exercise.model';
import { ExerciseService } from '../../exercises/exercise/exercise.service';
import { SidebarComponent } from 'src/frontend/app/shared/components/sidebar/sidebar.component';


@Component({
  selector: 'app-exercise-registration',
  templateUrl: './exercise-registration.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidebarComponent]
})
export class ExerciseRegistrationComponent {
  exerciseForm: FormGroup;
  availableWords: Word[] = [];
  isLoading = false;
  errorMessage = '';
  selectedFileName: string = '';
  imagePreview: string | null = null;

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
      image: ['', Validators.required]
    });
    this.wordService.getWords().subscribe(words => {
      console.log(words);
      this.availableWords = words.results;
    });
  }

  onSubmit() {
    if (!this.exerciseForm.valid) return;
    this.isLoading = true;
    const formData: Exercise = this.exerciseForm.value;

    this.exerciseService.createExercise(formData).subscribe({
      next: () => {
        this.router.navigate(['/exercises'])
      },
      error: (error) => {
        console.log(error)
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
  get isPublic() { return this.exerciseForm.get('isPublic'); }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Word } from '../../words/words.model';
import { WordService } from '../../words/words.service';

@Component({
  selector: 'app-word-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './word-registration.component.html'
})
export class WordRegistrationComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private wordService: WordService
  ) {
    this.registerForm = this.fb.nonNullable.group({
      word: ['', [Validators.required, Validators.minLength(2)]], 
    });
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const word: Word = this.registerForm.value.word;

      this.wordService.createWord(word).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Algo deu errado. Tente novamente.';
          this.isLoading = false;
        }
      });
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  get word() { return this.registerForm.get('word'); }

} 
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Word } from '../words.model';
import { WordService } from '../words.service';
import { FormComponent } from 'src/frontend/app/shared/components/form/form.component';

@Component({
    selector: 'app-word-form',
    standalone: true,
    imports: [FormComponent],
    templateUrl: './word-form.component.html',
  })
  export class WordFormComponent implements OnInit {
    formConfig = [
      {
        name: 'name',
        label: 'Palavra',
        type: 'text',
        value: '',
        validations: [
          { name: 'required', validator: Validators.required, message: 'É necessário digitar uma palavra' },
        ],
      },
    ];
  
    constructor(
      private _wordService: WordService,
      private _activatedRoute: ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      const id = this._activatedRoute.snapshot.paramMap.get('id');
      
      if (id) {
        this._wordService.getWord(Number(id)).subscribe((data: Word) => {
          this.updateFieldValues(data);
        });
      }
    }
  
    updateFieldValues(data: Word) {
      this.formConfig.forEach((field) => {
        if (data[field.name] !== undefined) {
          field.value = data[field.name];
        }
      });
    }
  
    onFormSubmit(formData: any) {
      const id = this._activatedRoute.snapshot.paramMap.get('id');
  
      if (id) {
        this._wordService.updateWord(Number(id), formData).subscribe((response: any) => {
          console.log('Update successful:', response);
        });
      } else {
        this._wordService.createWord(formData).subscribe((response: any) => {
          console.log('Creation successful:', response);
        });
      }
    }
}
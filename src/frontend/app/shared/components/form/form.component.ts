// dynamic-form.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() fields: any[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const formGroup: any = {};
    this.fields.forEach((field) => {
      formGroup[field.name] = new FormControl(
        field.value,
        this.getValidators(field.validations)
    );
    });
    this.form = new FormGroup(formGroup);
  }

  getValidators(validations?: { name: string; validator: any; message: string }[]) {
    return validations ? validations.map((v) => v.validator) : [];
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
      this.form.reset();
    }
  }
}

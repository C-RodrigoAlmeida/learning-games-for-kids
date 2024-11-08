import { ElementRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { fromEvent, merge, Observable } from 'rxjs';

import { DisplayMessage, GenericValidator, ValidationMessages } from '../../utils/generic-form-validation'

export abstract class FormBaseComponent {

    displayMessage: DisplayMessage = {};
    displayMessageArray: DisplayMessage[] = new Array();
    genericValidator: GenericValidator;
    validationMessages: ValidationMessages;

    mudancasNaoSalvas: boolean | undefined;

    protected configurarMensagensValidacaoBase(validationMessages: ValidationMessages) {
        // console.log('validationMessages', validationMessages)
        this.genericValidator = new GenericValidator(validationMessages);
    }

    protected configurarValidacaoFormularioBase(formInputElements: ElementRef[], formGroup: FormGroup, formArray?: FormArray) {
        // console.log('Form Array', formArray)
        // console.log('Form Group', formGroup)
        // console.log(formInputElements)
        let controlBlurs: Observable<any>[] = formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
        merge(...controlBlurs).subscribe(() => {
            // console.log('Form Array', formArray)
            // console.log('Form Group', formGroup)
            // console.log(formInputElements)
            this.validarFormulario(formGroup, formArray)
        });
    }


    protected validarFormulario(formGroup: FormGroup, formArray?: FormArray,) {
        // console.log(this.genericValidator.processarMensagens(formGroup));
        if (formArray) {
            // console.log(formArray.controls.indexOf(formGroup))
            this.displayMessageArray[formArray.controls.indexOf(formGroup)] = this.genericValidator.processarMensagens(formGroup);
        }
        else
            this.displayMessage = this.genericValidator.processarMensagens(formGroup);

        this.mudancasNaoSalvas = true;
    }
}
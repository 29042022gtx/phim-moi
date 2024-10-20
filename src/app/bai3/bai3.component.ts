import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function containsLetter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsLetter = /(?=.*[A-Za-z])/.test(control.value);
    return containsLetter ? null : { containsLetter: { value: control.value } };
  };
}

function containsDigit(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsDigit = /(?=.*\d)/.test(control.value);
    return containsDigit ? null : { containsDigit: { value: control.value } };
  };
}

function containsSpecialChar(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsSpecialChar = /(?=.*\W)/.test(control.value);
    return containsSpecialChar
      ? null
      : { containsSpecialChar: { value: control.value } };
  };
}

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrl: './bai3.component.css',
})
export class Bai3Component {
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(50),
    ]),
    age: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      containsDigit(),
      containsLetter(),
      containsSpecialChar(),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    showPassword: new FormControl<boolean>(false),
  });

  ngOnInit() {
    this.form.controls.age.setValue(null);
  }

  getKeyQuantity(obj: any) {
    return Object.keys(obj).length;
  }

  switchPassword(formControl: FormControl): number {
    if (formControl.pristine) {
      return 0;
    }
    if (formControl.valid) {
      return 1;
    }
    const fcErrors = formControl.errors || {};
    if ('required' in fcErrors) {
      return 2;
    }
    if ('minlength' in fcErrors) {
      return 3;
    }
    if ('containsDigit' in fcErrors) {
      return 4;
    }
    if ('containsLetter' in fcErrors) {
      return 5;
    }
    if ('containsSpecialChar' in fcErrors) {
      return 6;
    }
    return 0;
  }
}

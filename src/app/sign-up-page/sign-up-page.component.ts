import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AppModule } from '../app.module';
import { validatorList } from '../../ts/validatorList';
import data from '../../ts/data';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      validatorList.isUnique(this.getUsernameList()),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      validatorList.isUnique(this.getEmailList()),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      validatorList.isAllDigit(),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      validatorList.containsLetter(),
      validatorList.containsDigit(),
      validatorList.containsSpecialChar(),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      validatorList.containsLetter(),
      validatorList.containsDigit(),
      validatorList.containsSpecialChar(),
    ]),
  });
  submitted = false;
  message = '';

  constructor() {
    this.form.controls.confirmPassword.addValidators(
      validatorList.isSamePassword(this.form.controls.password)
    );
  }

  onInput() {
    this.message = '';
  }

  isInvalidFormControl(formControl: FormControl) {
    return formControl.dirty && formControl.invalid;
  }

  isValidFormControl(formControl: FormControl) {
    return formControl.pristine || formControl.valid;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let name = this.form.value.name as string;
    let username = this.form.value.username as string;
    let email = this.form.value.email as string;
    let phone = this.form.value.phone as string;
    let password = this.form.value.password as string;
    data.addUser(name, username, email, phone, password);
    this.message = 'Đã đăng kí tài khoản!';
  }

  getEmailList() {
    const emailList: any[] = [];
    data.userList.forEach((user) => {
      emailList.push(user.email);
    });
    return emailList;
  }

  getUsernameList() {
    const usernameList: any[] = [];
    data.userList.forEach((user) => {
      usernameList.push(user.username);
    });
    return usernameList;
  }

  getEmailWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default form-wrapper-0';
    }
    const controlErrors = formControl.errors;
    if (controlErrors == null) {
      return 'form-wrapper-valid form-wrapper-1';
    }
    let className = 'form-wrapper-invalid form-wrapper-';
    if ('email' in controlErrors || 'required' in controlErrors) {
      return className + 2;
    }
    if ('isUnique' in controlErrors) {
      return className + 3;
    }
    return className + 2;
  }

  getUsernameWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default form-wrapper-0';
    }
    const controlErrors = formControl.errors || {};
    let className = 'form-wrapper-invalid form-wrapper-';
    if ('required' in controlErrors || 'minlength' in controlErrors) {
      return className + 2;
    }
    if ('isUnique' in controlErrors) {
      return className + 3;
    }
    return 'form-wrapper-valid form-wrapper-1';
  }

  getPasswordWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default form-wrapper-0';
    }
    const controlErrors = formControl.errors || {};
    let className = 'form-wrapper-invalid form-wrapper-';
    if ('required' in controlErrors || 'minlength' in controlErrors) {
      return className + 2;
    }
    if ('containsLetter' in controlErrors) {
      return className + 3;
    }
    if ('containsDigit' in controlErrors) {
      return className + 4;
    }
    if ('containsSpecialChar' in controlErrors) {
      return className + 5;
    }
    if ('isSamePassword' in controlErrors) {
      return className + 6;
    }
    return 'form-wrapper-valid form-wrapper-1';
  }

  getInputWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default';
    }
    if (formControl.valid) {
      return 'form-wrapper-valid';
    }
    return 'form-wrapper-invalid';
  }

  getInputClass(formControl: FormControl) {
    if (formControl.pristine) {
      return 'is-default';
    }
    if (formControl.valid) {
      return 'is-valid';
    }
    return 'is-invalid';
  }
}

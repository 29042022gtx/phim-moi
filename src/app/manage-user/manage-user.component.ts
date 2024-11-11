import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { createUser, User } from '../../ts/entities/User';
import { validatorList } from '../../ts/validatorList';
import { MovieService } from '../service/movie.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
})
export class ManageUserComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
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
    confirmPassword: new FormControl('', [Validators.required]),
  });
  userFormSubmitted = true;
  currentUser = createUser();
  userFormMessage = '';
  userList: User[] = [];

  constructor(
    private userService: UserService,
    private movieService: MovieService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.currentUser = this.userService.getLoggedInUser() || createUser();
    this.userForm.controls.confirmPassword.addValidators(
      validatorList.isSamePassword(this.userForm.controls.password)
    );
    this.userForm.controls.username.addValidators([
      (control: AbstractControl): ValidationErrors | null => {
        return !this.userService.usernameExistedExcept(
          control.value,
          this.currentUser.username
        )
          ? null
          : { isUnique: { value: control.value } };
      },
    ]);
    this.userForm.controls.email.addValidators([
      (control: AbstractControl): ValidationErrors | null => {
        return !this.userService.emailExistedExcept(
          control.value,
          this.currentUser.email
        )
          ? null
          : { isUnique: { value: control.value } };
      },
    ]);
    this.userForm.controls.name.setValue(this.currentUser.name);
    this.userForm.controls.username.setValue(this.currentUser.username);
    this.userForm.controls.email.setValue(this.currentUser.email);
    this.userForm.controls.phone.setValue(this.currentUser.phone);
    this.userForm.controls.password.setValue(this.currentUser.password);
    this.userForm.controls.confirmPassword.setValue(this.currentUser.password);
  }

  ngOnInit(): void {
    this.userList = this.userService.getUserList();
  }

  submit() {
    this.userFormSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    let name = this.userForm.value.name as string;
    let username = this.userForm.value.username as string;
    let email = this.userForm.value.email as string;
    let phone = this.userForm.value.phone as string;
    let password = this.userForm.value.password as string;
    this.userService.updateUser(
      name,
      username,
      email,
      phone,
      password
    );
    this.userFormMessage = 'Cập nhật thành công';
  }

  getEmailWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.userFormSubmitted) {
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
    if (formControl.pristine && !this.userFormSubmitted) {
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
    if (formControl.pristine && !this.userFormSubmitted) {
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
    return 'form-wrapper-valid form-wrapper-1';
  }

  getInputWrapperClass(formControl: FormControl) {
    if (formControl.pristine) {
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

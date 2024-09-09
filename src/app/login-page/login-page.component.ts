import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import data from '../../ts/data';
import { AppModule } from '../app.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  data = data;
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      // Validators.minLength(6),
    ]),
    loginPassword: new FormControl('', [
      Validators.required,
      // Validators.minLength(8),
    ]),
  });
  message: string = '';
  submitted: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    if (data.isLoggedIn()) {
      this.message = 'Vui lòng đăng xuất khỏi tài khoản hiện tại!';
      return;
    }
    const username = this.form.value.username as string;
    const loginPassword = this.form.value.loginPassword as string;
    data.logIn(username, loginPassword);
    if (!data.isLoggedIn()) {
      this.message = 'Tên đăng nhập hoặc mật khẩu không đúng!';
      return;
    }
    this.message = 'Đăng nhập thành công!';
    this.form.reset();
    this.router.navigateByUrl('').then(() => {
      window.location.reload();
    });
  }

  onLoggedOut() {
    this.message = 'Đã đăng xuất!';
  }

  getInputWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default form-wrapper-0';
    }
    if (formControl.valid) {
      return 'form-wrapper-default form-wrapper-0';
    }
    return 'form-wrapper-invalid form-wrapper-2';
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import data from '../../ts/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  @Output() loggedOut = new EventEmitter<number>();
  data = data;

  constructor(private router: Router) {}

  onSubmit() {
    data.logOut();
    this.loggedOut.emit();
    this.router.navigateByUrl('login-page');
  }
}

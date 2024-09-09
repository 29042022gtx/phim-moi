import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import data from '../../ts/data';

@Component({
  selector: 'app-manage-page',
  standalone: true,
  imports: [AppModule, CommonModule],
  templateUrl: './manage-page.component.html',
  styleUrl: './manage-page.component.css',
})
export class ManagePageComponent {
  movies = data.movieList;
  users = data.userList;
}

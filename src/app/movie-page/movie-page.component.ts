import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import data from '../../ts/data';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent {
  currentIdx = -1;
  movies = data.movieList;
}

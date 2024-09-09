import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import data from '../../ts/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  movieList = data.movieList.slice(0, 8);
}
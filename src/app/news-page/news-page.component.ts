import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import data from '../../ts/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css',
})
export class NewsPageComponent {
  newsList = data.newsList;
}

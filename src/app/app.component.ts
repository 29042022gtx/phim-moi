import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PhimMoi';
  cre = 'Huynh Chi Hao';
  searching: string = '';
  bai: number = 1;
  num: number = 0;
  item(value: any) {
    this.num = value;
    // console.log(value);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PhimMoi';
  cre = 'Huynh Chi Hao';
  array: any = [];

  push(val: string) {
    if (val == '') {
      return;
    }
    this.array.push(val);
  }
}

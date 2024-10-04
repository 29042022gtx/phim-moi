import { Component } from '@angular/core';

@Component({
  selector: 'app-bai3-lab1',
  standalone: true,
  imports: [],
  templateUrl: './bai3-lab1.component.html',
  styleUrl: './bai3-lab1.component.css'
})

export class Bai3Lab1Component {
  isReadonly = true;

  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
    return this.isReadonly;
  }
}

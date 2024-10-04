import { Component } from '@angular/core';

@Component({
  selector: 'app-bai4-lab1',
  standalone: true,
  imports: [],
  templateUrl: './bai4-lab1.component.html',
  styleUrl: './bai4-lab1.component.css',
})
export class Bai4Lab1Component {
  isDisabled = false;

  toggleDisable() {
    this.isDisabled = !this.isDisabled;
  }

  disable() {
    this.isDisabled = true;
  }

  enable() {
    this.isDisabled = false;
  }

  popMessage() {
    alert('Hello!');
  }
}

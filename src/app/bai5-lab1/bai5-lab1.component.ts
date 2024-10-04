import { Component } from '@angular/core';

@Component({
  selector: 'app-bai5-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai5-lab1.component.html',
  styleUrl: './bai5-lab1.component.css',
})
export class Bai5Lab1Component {
  a: any = 0;
  b: any = 0;

  getInt(s: string) {
    if (s.length == 0) {
      return 0;
    }
    return parseInt(s);
  }

  sum(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  divide(a: number, b: number) {
    return a / b;
  }
}

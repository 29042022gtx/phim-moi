import { Component } from '@angular/core';

@Component({
  selector: 'app-bai7-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai7-lab1.component.html',
  styleUrl: './bai7-lab1.component.css',
})
export class Bai7Lab1Component {
  a: any = 0;
  b: any = 0;
  c: any = 0;

  getFloat(s: string) {
    if (s.length == 0) {
      return 0;
    }
    return parseFloat(s);
  }

  getMax() {
    let numA = parseFloat(this.a);
    let numB = parseFloat(this.b);
    let numC = parseFloat(this.c);

    let max = numA;
    if (numB > max || isNaN(numA)) {
      max = numB;
    }
    if (numC > max || isNaN(numB)) {
      max = numC;
    }
    return max;
  }
}

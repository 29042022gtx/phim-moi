import { Component } from '@angular/core';

@Component({
  selector: 'app-bai6-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai6-lab1.component.html',
  styleUrl: './bai6-lab1.component.css',
})
export class Bai6Lab1Component {
  a: any = 0;
  b: any = 0;

  getInt(s: string) {
    if (s.length == 0) {
      return 0;
    }
    return parseInt(s);
  }

  max(...args: number[]) {
    let maxVal = args[0];
    for (let val of args) {
      if (val > maxVal) {
        maxVal = val;
      }
    }
    return maxVal;
  }
}

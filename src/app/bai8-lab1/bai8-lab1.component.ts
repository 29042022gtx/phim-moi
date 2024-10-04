import { Component } from '@angular/core';

@Component({
  selector: 'app-bai8-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai8-lab1.component.html',
  styleUrl: './bai8-lab1.component.css',
})
export class Bai8Lab1Component {
  a: any = 0;
  b: any = 0;
  c: any = 0;

  getFloat(s: string) {
    if (s.length == 0) {
      return 0;
    }
    return parseFloat(s);
  }

  inDayTangDan() {
    let min = parseFloat(this.a);
    if (parseFloat(this.b) < min) {
      min = parseFloat(this.b);
    }
    if (parseFloat(this.c) < min) {
      min = parseFloat(this.c);
    }

    let max = parseFloat(this.a);
    if (parseFloat(this.b) > max) {
      max = parseFloat(this.b);
    }
    if (parseFloat(this.c) > max) {
      max = parseFloat(this.c);
    }

    return `${min}
      ${
        parseFloat(this.a) + parseFloat(this.b) + parseFloat(this.c) - min - max
      } ${max}`;
  }
}

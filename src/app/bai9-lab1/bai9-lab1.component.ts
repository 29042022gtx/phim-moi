import { Component } from '@angular/core';

@Component({
  selector: 'app-bai9-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai9-lab1.component.html',
  styleUrl: './bai9-lab1.component.css',
})
export class Bai9Lab1Component {
  a: any = 0;
  b: any = 0;

  inSoThuc(s: string) {
    return this.inSo(s, true);
  }

  inSoNguyen(s: string) {
    return this.inSo(s, false);
  }

  inSo(s: string, soThuc: boolean) {
    if (s.length == 0) {
      return '';
    }
    let num = soThuc ? parseFloat(s) : parseInt(s);
    return String(num);
  }

  getFloat(s: string) {
    return parseFloat(s);
  }

  rong(...args: string[]) {
    for (let val of args) {
      if (val.length == 0) {
        throw new Error('Hay nhap du du lieu!');
      }
    }
    return true;
  }

  khongPhaiSo(...args: number[]) {
    for (let val of args) {
      if (isNaN(val)) {
        throw new Error('Du lieu khong hop le!');
      }
    }
    return true;
  }

  xuLy() {
    let a = this.a;
    let b = this.b;
    try {
      this.rong(a, b);
      a = this.getFloat(a);
      b = this.getFloat(b);
      this.khongPhaiSo(a, b);
    } catch (e: any) {
      return e.message;
    }
    return this.giaiBac1(a, b);
  }

  giaiBac1(a: number, b: number) {
    if (a != 0) {
      return `Co 1 n0 x = ${this.timX(a, b)}`;
    }
    if (b != 0) {
      return 'Vo n0';
    }
    return 'Co vo so n0';
  }

  timX(a: number, b: number) {
    if (a != 0) {
      const x = this.round(-b / a, 2);
      return String(x);
    }
    return '';
  }

  round(num: number, radix: number) {
    const base = Math.pow(10, radix);
    return Math.round(num * base) / base;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-bai10-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai10-lab1.component.html',
  styleUrl: './bai10-lab1.component.css',
})
export class Bai10Lab1Component {
  a: any = 0;
  b: any = 0;
  c: any = 0;

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
    let a = 0;
    let b = 0;
    let c = 0;
    try {
      this.rong(this.a, this.b, this.c);
      a = this.getFloat(this.a);
      b = this.getFloat(this.b);
      c = this.getFloat(this.c);
      this.khongPhaiSo(a, b, c);
    } catch (e: any) {
      return e.message;
    }
    return this.giaiBac2(a, b, c);
  }

  giaiBac2(a: number, b: number, c: number) {
    if (a != 0) {
      let delta = b * b - 4 * a * c;
      if (delta < 0) {
        return 'Vo n0';
      }
      if (delta == 0) {
        return `Co n0 kep x1 = x2 = ${this.timX1X2(a, b, c)[0]}`;
      }
      let [x1, x2] = this.timX1X2(a, b, c);
      return `Co 2 n0 x1 = ${x1}, x2 = ${x2}`;
    }
    return this.giaiBac1(b, c);
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

  timX1X2(a: number, b: number, c: number) {
    if (a != 0) {
      let delta = b * b - 4 * a * c;
      let x1 = 0;
      let x2 = 0;
      if (delta < 0) {
        return ['', ''];
      }
      if (delta == 0) {
        x1 = -b / (2 * a);
        x1 = this.round(x1, 2);
        return [String(x1), String(x1)];
      }
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x1 = this.round(x1, 2);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      x2 = this.round(x2, 2);
      return [String(x1), String(x2)];
    }
    return [this.timX(b, c), ''];
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-bai11-lab1',
  // standalone: true,
  // imports: [],
  templateUrl: './bai11-lab1.component.html',
  styleUrl: './bai11-lab1.component.css',
})
export class Bai11Lab1Component {
  a: any = 0;
  b: any = 0;
  c: any = 0;
  bac: string = 'bac2';
  thongBao: string = '\u00A0';
  x: string = '';
  x1: string = '';
  x2: string = '';

  xuLy() {
    let a = 0;
    let b = 0;
    let c = 0;
    try {
      [a, b, c] = this.laySo('a', 'b', 'c');
    } catch (e: any) {
      this.thongBao = e.message;
      return;
    }
    if (this.cheDo('bac1')) {
      this.x = this.timX(a, b);
      this.thongBao = this.giaiBac1(a, b);
      return;
    }
    [this.x1, this.x2] = this.timX1X2(a, b, c);
    this.thongBao = this.giaiBac2(a, b, c);
  }

  clearOutput() {
    this.x = '';
    this.x1 = '';
    this.x2 = '';
    this.thongBao = '\u00A0';
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

  cheDo(s: string) {
    return this.bac == s;
  }

  moBac1() {
    this.bac = 'bac1';
  }

  moBac2() {
    this.bac = 'bac2';
  }

  laySo(...keys: string[]) {
    this.kiemTra(...keys);
    const result: number[] = [];
    for (let key of keys) {
      let val = parseFloat(String(this[key as keyof this]));
      result.push(val);
    }
    return result;
  }

  kiemTra(...keys: string[]) {
    for (let key of keys) {
      let val = this[key as keyof this];
      if (this.rong(val)) {
        throw new Error('Hay nhap du du lieu!');
      }
    }
    for (let key of keys) {
      let val = this[key as keyof this];
      if (this.khongPhaiSo(val)) {
        throw new Error('Du lieu khong hop le!');
      }
    }
  }

  khongPhaiSo(...args: any[]) {
    for (let val of args) {
      val = parseFloat(String(val));
      if (isNaN(val)) {
        return true;
      }
    }
    return false;
  }

  rong(...args: any[]) {
    for (let val of args) {
      if (String(val).length == 0) {
        return true;
      }
    }
    return false;
  }

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

  round(num: number, radix: number) {
    const base = Math.pow(10, radix);
    return Math.round(num * base) / base;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styles: ``,
})
export class Bai6Component {
  thongBao: string = '\u00A0';
  n: any = '';
  arr: any[] = [];

  xuLy() {
    let n: number;
    try {
      [n] = this.laySo('n');
      if (n <= 0) {
        throw new Error('n phai lon hon 0!');
      }
    } catch (e: any) {
      this.thongBao = e.message;
      this.arr = []
      return;
    }
    this.arr = this.randomArr(n);
    this.thongBao = 'Cac phan tu le: ';
    const result: any[] = [];
    for (let i = 0; i < this.arr.length; i += 1) {
      if (this.arr[i] % 2 != 0) {
        result.push(this.arr[i]);
      }
    }
    this.thongBao += this.arrToString(result);
  }

  randomArr(length = 0) {
    const arr = [];
    for (let i = 0; i < length; i += 1) {
      let num = this.round(Math.random() * 100, 0);
      arr.push(num);
    }
    return arr;
  }

  arrToString(arr: any[]) {
    if (arr.length == 0) {
      return '[]';
    }
    let s = '[';
    for (let i = 0; i < arr.length - 1; i += 1) {
        s += arr[i] + ', ';
    }
    s += arr.at(-1) + ']';
    return s;
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

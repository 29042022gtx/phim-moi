import { Component } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styles: ``,
})
export class Bai2Component {
  n: any = 1;
  thongBao: string = '\u00A0';

  xuLy() {
    this.thongBao = 'Cac so chinh phuong nho hon n: ';
    let n: number;
    try {
      [n] = this.laySo('n');
      if (n <= 0) {
        throw new Error('n phai lon hon 0!');
      }
    } catch (e: any) {
      this.thongBao = e.message;
      return;
    }

    for (let i = 1; i < n; i += 1) {
      if (this.chinhPhuong(i)) {
        this.thongBao += i + ' ';
      }
    }
  }

  chinhPhuong(n: number) {
    let canBac2 = Math.sqrt(n);
    return canBac2 == Math.floor(canBac2);
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styles: ``,
})
export class Bai1Component {
  n: any = 0;
  thongBao: string = '\u00A0';

  xuLy() {
    this.thongBao = '\u00A0';
    let n = parseFloat(this.n);
    for (let i = 2; i < n; i += 1) {
      if (this.nguyenTo(i)) {
        this.thongBao += i + ' ';
      }
    }
  }

  nguyenTo(n: number) {
    for (let i = 2; i < n; i += 1) {
      if (n % i == 0) {
        return false;
      }
    }
    return n >= 2;
  }
}

import { Component } from '@angular/core';
import { SanPham } from './sanpham';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrl: './bai4.component.css',
})
export class Bai4Component {
  choice: any = 'Mức giá';
  sanpham: SanPham[] = [
    {
      hanghoa: 'iPhone9',
      dongia: 700,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'Samsung',
      dongia: 400,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'Nokia',
      dongia: 100,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'Sony Xperia',
      dongia: 450,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'Motorola',
      dongia: 180,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'Oppo',
      dongia: 600,
      soluong: 0,
      active: false,
    },
    {
      hanghoa: 'bPhone',
      dongia: 90,
      soluong: 0,
      active: false,
    },
  ];
  
  tongTien() {
    let tong = 0;
    this.sanpham.forEach((x) => {
      if (x.active) {
        tong += x.dongia * x.soluong;
      }
    })
    return tong;
  }

  filterprice() {
    // console.log(this.choice)
    if (this.choice == 'Mức giá') {
      return this.sanpham;
    } else if (this.choice < 200) {
      return this.sanpham.filter(function (item) {
        return item.dongia < 200;
      });
    } else if (this.choice > 500) {
      return this.sanpham.filter((item) => {
        return item.dongia > 500;
      });
    } else {
      return this.sanpham.filter((item) => {
        return item.dongia >= 200 && item.dongia <= 500;
      });
    }
  }
}

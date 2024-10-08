import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrl: './bai1.component.css',
})
export class Bai1Component {
  services: any[] = [
    {
      name: 'Chocolate freeze',
      price: 69,
      active: true,
    },
    {
      name: 'Phindi Hạnh Nhân',
      price: 50,
      active: false,
    },
    {
      name: 'Cà Phê Sữa',
      price: 40,
      active: false,
    },
    {
      name: 'Trà Sen Vàng',
      price: 40,
      active: false,
    },
  ];

  toggleItem(item: any) {
    item.active = !item.active;
    console.log(this.services);
  }

  total() {
    let sum = 0;
    this.services.forEach((item) => {
      if (item.active) {
        sum += item.price;
      }
    })
    return sum;
  }
}

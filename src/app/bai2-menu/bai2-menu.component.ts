import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bai2-menu',
  templateUrl: './bai2-menu.component.html',
  styleUrl: './bai2-menu.component.css',
})
export class Bai2MenuComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Đồng hồ thụy sỹ',
      image: 'assets/images/1001.jpg',
      price: 1200,
      incart: 1,
      total: 0,
    },
    {
      id: 2,
      name: 'Dell Star X',
      image: 'assets/images/1002.jpg',
      price: 700,
      incart: 1,
      total: 0,
    },
    {
      id: 3,
      name: 'Sony Vaio 2017',
      image: 'assets/images/1003.jpg',
      price: 1700,
      incart: 1,
      total: 0,
    },
    {
      id: 4,
      name: 'Máy ảnh Canon',
      image: 'assets/images/1004.jpg',
      price: 300,
      incart: 1,
      total: 0,
    },
    {
      id: 5,
      name: 'Vòng cưới France',
      image: 'assets/images/1005.jpg',
      price: 7000,
      incart: 1,
      total: 0,
    },
    {
      id: 6,
      name: 'Motorola thế hệ 5',
      image: 'assets/images/1006.jpg',
      price: 900,
      incart: 1,
      total: 0,
    },
    {
      id: 7,
      name: 'Mũ cao bồi Mexico',
      image: 'assets/images/1007.jpg',
      price: 100,
      incart: 1,
      total: 0,
    },
    {
      id: 8,
      name: 'Nước hoa Korea',
      image: 'assets/images/1008.jpg',
      price: 600,
      incart: 1,
      total: 0,
    },
  ];
  cart: any[] = [];
  tongtien: number = 0;
  @Input() searching: string = '';
  @Output() count = new EventEmitter<number>();

  emit() {
    this.count.emit(this.itemcount());
  }

  itemcount1() {
    let sum = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].incart;
    }
    this.count.emit(this.itemcount());
    return sum;
  }

  itemcount() {
    let sum = 0;
    for (let i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].incart;
    }
    return sum;
  }

  DeleteAll() {
    this.cart;
    this.cart.forEach((item) => {
      item.incart = 1;
    });
    this.cart.splice(0);
    this.emit()
  }

  sumTotal() {
    let sum = 0;
    this.cart.forEach((item) => {
      sum += item.incart * item.price;
    });
    return sum;
  }

  Delete(index: number) {
    this.cart[index].incart = 1;
    this.cart.splice(index, 1);
    this.emit()
  }

  decrement(index: number) {
    this.cart[index].incart -= 1;
    this.emit()
  }

  increment(index: number) {
    this.cart[index].incart += 1;
    this.emit()
  }

  addCart(item: any) {
    var flag = false;
    if (this.cart.length == 0) {
      flag = false;
    } else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          flag = true;
        }
      }
    }
    if (flag == false) {
      this.cart.push(item);
    } else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          this.cart[i].incart++;
        }
      }
    }
    this.emit()
  }
  filterName() {
    if (this.searching == null) {
      return this.products;
    } else {
      if (this.searching) {
        //có
        console.log(this.searching);
        console.log(this.searching.toUpperCase().split(' '));
        return this.products.filter((item) => {
          return this.searching
            .toUpperCase()
            .split(' ')
            .every((v) => item.name.toUpperCase().includes(v));
        });
      } else {
        return this.products;
      }
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-bai1-menu',
  templateUrl: './bai1-menu.component.html',
  styleUrl: './bai1-menu.component.css',
})
export class Bai1MenuComponent {
  products: any[] = [
    {
      id: 1,
      title: 'Macbook Pro',
      price: 25000000,
      qty: 1,
      image: './assets/images/1.jpg',
    },
    {
      id: 2,
      title: 'Asus ROG',
      price: 17000000,
      qty: 1,
      image: './assets/images/2.jpg',
    },
    {
      id: 3,
      title: 'Amazon Kindle',
      price: 15000000,
      qty: 1,
      image: './assets/images/3.jpg',
    },
    {
      id: 4,
      title: 'Another Product',
      price: 18000000,
      qty: 1,
      image: './assets/images/4.jpg',
    },
  ];
  cartItems: any[] = [];

  Total() {
    let sum = 0;
    this.cartItems.forEach((item) => {
      sum += item.price * item.qtys;
    });
    return sum;
  }

  removeItem(idx: number) {
    this.cartItems.splice(idx, 1);
  }

  totalItems() {
    return this.cartItems.length;
  }

  addToCart(itemToAdd: any) {
    // Add the item or increase qty
    let itemInCart = this.cartItems.filter((item) => item.id === itemToAdd.id);
    let isItemInCart = itemInCart.length > 0;
    if (isItemInCart === false) {
      this.cartItems.push({
        id: itemToAdd.id,
        title: itemToAdd.title,
        price: itemToAdd.price,
        qtys: itemToAdd.qty,
        image: itemToAdd.image,
      });
    } else {
      itemInCart[0].qtys += itemToAdd.qty;
    }
    itemToAdd.qty = 1;
    // console.log(this.cartItems);
    // console.log(this.products);
  }
}

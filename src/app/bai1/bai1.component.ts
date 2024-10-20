import { Component } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrl: './bai1.component.css',
})
export class Bai1Component {
  ImgV: any[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  Content: string =
    'Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinhz tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà khách hàng không thể bỏ qua khi đến với CellphoneS đó là MacBook Air M1. Dưới đây là chi tiết về thiết kế, cấu hình của máy.';
  products: any[] = [
    {
      img: '1.jpg',
      name: 'Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam ',
      price: 26500,
      rating: 3,
      inStock: 5,
      color: 'Đen',
      onSale: true,
      quality: 0,
    },
    {
      img: '5.jpg',
      name: 'Apple MacBook Air 13 256GB 2020 I I Chính hãng Apple Việt Nam ',
      price: 29500,
      rating: 4,
      inStock: 3,
      color: 'Xanh',
      onSale: false,
      quality: 0,
    },
    {
      img: '6.jpg',
      name: 'Apple MacBook Air 13 512GB 2020 I I Chính hãng Apple Việt Nam ',
      price: 30500,
      rating: 5,
      inStock: 0,
      color: 'Cam',
      onSale: true,
      quality: 0,
    },
  ];
  selectedVariant: number = 0;
  cart: any[] = [];
  imgs: string = '1.jpg';

  DeleteAll() {
    this.cart = [];
  }

  Remove(i: number) {
    this.cart.splice(i, 1);
  }

  Total() {
    let sum = 0;
    this.cart.forEach((productInCart) => {
      sum += productInCart.price * productInCart.quality;
    });
    return sum;
  }

  totalItems() {
    let quantity = 0;
    this.cart.forEach((productInCart) => {
      quantity += productInCart.quality;
    });
    return quantity;
  }

  ChangeImage(i: number) {
    this.imgs = this.products[i].img;
  }

  addCart(index: number) {
    const product = this.products[index];
    let indexInCart = -1;
    this.cart.some((productInCart, index) => {
      if (product.name == productInCart.name) {
        indexInCart = index;
        return true;
      }
      return false;
    });
    if (indexInCart == -1) {
      this.cart.push(product);
      this.cart[this.cart.length - 1].quality += 1;
      this.cart[this.cart.length - 1].inStock -= 1;
      return;
    }
    this.cart[indexInCart].quality += 1;
    this.cart[indexInCart].inStock -= 1;
  }

  priceOnSale() {
    const product = this.products[this.selectedVariant];
    if (product.onSale) {
      return product.price;
    }
    return product.price * 0.8;
  }

  inStock() {
    return this.products[this.selectedVariant].inStock;
  }

  changeImg(item: string) {
    this.imgs = item;
  }

  title() {
    return this.products[this.selectedVariant].name;
  }

  starRating() {
    const arr = [];
    for (let i = 0; i < this.products[this.selectedVariant].rating; i++) {
      arr.push(0);
    }
    return arr;
  }

  price() {
    return this.products[this.selectedVariant].price;
  }

  inSale() {
    return this.products[this.selectedVariant].onSale;
  }
}

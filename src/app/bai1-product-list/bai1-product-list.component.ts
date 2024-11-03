import { Component } from '@angular/core';
import { Product } from '../etities/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-bai1-product-list',
  templateUrl: './bai1-product-list.component.html',
  styleUrl: './bai1-product-list.component.css'
})
export class Bai1ProductListComponent {
  searching: string = '';
  filterProductList: Product[] = [];
  productList: Product[] = [];

  constructor(private products: ProductsService) {
    this.productList = this.products.getAllProductList();
    this.filterProductList = this.productList;
  }

  filterResults() {
    console.log(this.searching);
    if (!this.searching) {
      this.filterProductList = this.productList;
    }
    this.filterProductList = this.productList.filter((item) => {
      return item.productName
        .toLowerCase()
        .includes(this.searching.toLowerCase());
    });
  }
  showRating(str: any) {
    alert(`${str}`);
  }
}
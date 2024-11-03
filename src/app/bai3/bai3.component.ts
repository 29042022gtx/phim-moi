import { Component, Input } from '@angular/core';
import { Product } from '../etities/Product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrl: './bai3.component.css',
})
export class Bai3Component {
  @Input() productList: Product[] = [];
  constructor(private products: ProductsService) {
    this.productList = this.products.getAllProductList();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../etities/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-bai3-product-details',
  templateUrl: './bai3-product-details.component.html',
  styleUrl: './bai3-product-details.component.css',
})
export class Bai3ProductDetailsComponent implements OnInit {
  productDetail: Product | undefined;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id']);
    this.productDetail = this.productService.getProductId(id);
  }
}

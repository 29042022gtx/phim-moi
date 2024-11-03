import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../etities/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-bai2-product-details',
  templateUrl: './bai2-product-details.component.html',
  styleUrl: './bai2-product-details.component.css',
})
export class Bai2ProductDetailsComponent implements OnInit {
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

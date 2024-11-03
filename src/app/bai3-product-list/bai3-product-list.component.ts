import { Component } from '@angular/core';
import { Product } from '../etities/Product';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bai3-product-list',
  templateUrl: './bai3-product-list.component.html',
  styleUrl: './bai3-product-list.component.css',
})
export class Bai3ProductListComponent {
  searching: string = '';
  filterProductList: Product[] = [];
  productList: Product[] = [];
  formProduct = new FormGroup({
    productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>(''),
  });
  file: string = '';
  IsAdd: number = 1;
  IsUpdate: number = 0;
  id: any;

  constructor(private productService: ProductsService) {
    this.productList = this.productService.getAllProductList();
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

  showAdd() {
    this.IsUpdate = 0;
    this.IsAdd = 1;
    this.formProduct.reset();
  }

  Add() {
    this.formProduct.controls.productId.setValue(this.productService.AutoId());
    this.productService.AddProduct(this.formProduct.value, this.file);
  }

  Edit(index: number) {
    this.id = index;
    this.IsAdd = 0;
    this.IsUpdate = 1;
    const product = this.productService.EditProduct(index);
    this.formProduct.controls.productName.setValue(product.productName);
    this.formProduct.controls.productCode.setValue(product.productCode);
    this.formProduct.controls.releaseDate.setValue(product.releaseDate);
    this.formProduct.controls.price.setValue(product.price);
    this.formProduct.controls.description.setValue(product.description);
    this.file = product.imageUrl;
  }

  Update() {
    this.productService.UpdateProduct(
      this.id,
      this.formProduct.value,
      this.file
    );
  }

  Delete(index: number) {
    this.productService.DeleteProduct(index);
  }

  onChange(event: any) {
    let str = event.target.files[0].name;
    this.file = `./assets/images/${str}`;
  }
}

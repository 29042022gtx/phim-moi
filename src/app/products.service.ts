import { Injectable } from '@angular/core';
import { Product } from './etities/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  protected productList: Product[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: './assets/images/leaf-rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: './assets/images/garden-cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: './assets/images/rejon-hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: './assets/images/egore911-saw.png',
    },
    {
      productId: 10,
      productName: 'Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: './assets/images/xbox-controller.png',
    },
  ];
  getAllProductList(): Product[] {
    return this.productList;
  }
  getProductId(id: number): Product | undefined {
    return this.productList.find((item) => item.productId == id);
  }
  AddProduct(frmProduct: any, fileImg: string) {
    var index = this.productList.push(frmProduct) - 1;
    this.productList[index].imageUrl = fileImg;
    console.log(this.productList);
  }
  EditProduct(index: number) {
    return this.productList[index];
  }
  UpdateProduct(index: number, frmProduct: any, fileImg: string) {
    console.log(frmProduct.productName);
    this.productList[index].productName = frmProduct.productName;
    this.productList[index].productCode = frmProduct.productCode;
    this.productList[index].releaseDate = frmProduct.releaseDate;
    this.productList[index].price = frmProduct.price;
    this.productList[index].description = frmProduct.description;
    this.productList[index].imageUrl = fileImg;
  }
  DeleteProduct(index: number) {
    if (confirm('Do you want to delete')) this.productList.splice(index, 1);
  }

  AutoId() {
    return this.productList.length + 10;
  }
}
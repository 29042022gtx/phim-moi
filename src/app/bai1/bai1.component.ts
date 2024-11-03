import { Component, inject } from '@angular/core';
import { Product } from '../etities/Product';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrl: './bai1.component.css',
})
export class Bai1Component {
  productList: Product[] = [
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
  private document = inject(DOCUMENT);

  show(innerHTML: string) {
    this.document.getElementById('product')!.innerHTML = innerHTML;
  }
  render() {
    let innerHTML = `
    <tbody>
      <tr>
        <th>Image</th>
        <th>Product</th>
        <th>Code</th>
        <th>Available</th>
        <th>Price</th>
        <th>5 start rating</th>
      </tr>
    `;
    innerHTML += this.productList
      .map((prod) => {
        return `
        <tr>
        <td>
          <img src='${prod.imageUrl}' style='height: 2em;'>
        </td>
        <td>${prod.productName}</td>
        <td>${prod.productCode}</td>
        <td>${prod.releaseDate}</td>
        <td>${prod.price}</td>
        <td>${prod.starRating}</td>
        </tr>
        `;
      }, '')
      .join('');
    innerHTML += '</tbody>';
    this.show(innerHTML);
  }
}

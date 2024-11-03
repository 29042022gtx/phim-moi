import { Routes } from '@angular/router';
import { Bai1ProductListComponent } from './bai1-product-list/bai1-product-list.component';
import { Bai2ProductListComponent } from './bai2-product-list/bai2-product-list.component';
import { Bai2ProductDetailsComponent } from './bai2-product-details/bai2-product-details.component';
import { Bai3ProductListComponent } from './bai3-product-list/bai3-product-list.component';
import { Bai3ProductDetailsComponent } from './bai3-product-details/bai3-product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: Bai1ProductListComponent,
  },
  {
    path: 'bai1-product-list',
    component: Bai1ProductListComponent,
  },
  {
    path: 'bai2-product-list',
    component: Bai2ProductListComponent,
  },
  {
    path: 'bai2-product-details/:id',
    component: Bai2ProductDetailsComponent,
    title: 'Product Detail',
  },
  {
    path: 'bai3-product-list',
    component: Bai3ProductListComponent,
  },
  {
    path: 'bai3-product-details/:id',
    component: Bai3ProductDetailsComponent,
    title: 'Product Detail',
  },
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Bai1StarComponent } from './bai1-star/bai1-star.component';
import { Bai1ProductListComponent } from './bai1-product-list/bai1-product-list.component';
import { Bai2ProductListComponent } from './bai2-product-list/bai2-product-list.component';
import { Bai2ProductDetailsComponent } from './bai2-product-details/bai2-product-details.component';
import { Bai3ProductListComponent } from './bai3-product-list/bai3-product-list.component';
import { Bai3ProductDetailsComponent } from './bai3-product-details/bai3-product-details.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  declarations: [
    Bai1StarComponent,
    Bai1ProductListComponent,
    Bai2ProductListComponent,
    Bai2ProductDetailsComponent,
    Bai3ProductListComponent,
    Bai3ProductDetailsComponent,
  ],
  exports: [
    Bai1StarComponent,
    Bai1ProductListComponent,
    Bai2ProductListComponent,
    Bai2ProductDetailsComponent,
    Bai3ProductListComponent,
    Bai3ProductDetailsComponent,
  ],
})
export class AppModule {}

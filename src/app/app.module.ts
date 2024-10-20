import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    Bai1Component,
    Bai2Component,
    Bai3Component
  ],
  exports: [
    Bai1Component,
    Bai2Component,
    Bai3Component
  ],
})
export class AppModule {}

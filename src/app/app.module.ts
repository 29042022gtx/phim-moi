import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai1Component } from './bai1/bai1.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai1Component
  ],
  exports: [
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai1Component
  ],
})
export class AppModule {}

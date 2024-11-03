import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { RouterOutlet } from '@angular/router';
import { Bai3Component } from './bai3/bai3.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterOutlet],
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

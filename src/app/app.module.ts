import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai1MenuComponent } from './bai1-menu/bai1-menu.component';
import { Bai2MenuComponent } from './bai2-menu/bai2-menu.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Bai1Component,
    Bai2Component,
    Bai1MenuComponent,
    Bai2MenuComponent
  ],
  exports: [
    Bai1Component,
    Bai2Component,
    Bai1MenuComponent,
    Bai2MenuComponent
  ],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai6Component } from './bai6/bai6.component';
import { Bai7Component } from './bai7/bai7.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai5Component,
    Bai6Component,
    Bai7Component,
  ],
  exports: [
    Bai1Component,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai5Component,
    Bai6Component,
    Bai7Component,
  ],
})
export class AppModule {}

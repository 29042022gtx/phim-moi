import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bai2Lab1Component } from './bai2-lab1/bai2-lab1.component';
import { Bai3Lab1Component } from './bai3-lab1/bai3-lab1.component';
import { Bai4Lab1Component } from './bai4-lab1/bai4-lab1.component';
import { Bai5Lab1Component } from './bai5-lab1/bai5-lab1.component';
import { Bai6Lab1Component } from './bai6-lab1/bai6-lab1.component';
import { Bai7Lab1Component } from './bai7-lab1/bai7-lab1.component';
import { Bai8Lab1Component } from './bai8-lab1/bai8-lab1.component';
import { Bai9Lab1Component } from './bai9-lab1/bai9-lab1.component';
import { Bai10Lab1Component } from './bai10-lab1/bai10-lab1.component';
import { Bai11Lab1Component } from './bai11-lab1/bai11-lab1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Bai2Lab1Component,
    Bai3Lab1Component,
    Bai4Lab1Component,
  ],
  declarations: [
    Bai5Lab1Component,
    Bai6Lab1Component,
    Bai7Lab1Component,
    Bai8Lab1Component,
    Bai9Lab1Component,
    Bai10Lab1Component,
    Bai11Lab1Component,
  ],
  exports: [
    Bai2Lab1Component,
    Bai3Lab1Component,
    Bai4Lab1Component,
    Bai5Lab1Component,
    Bai6Lab1Component,
    Bai7Lab1Component,
    Bai8Lab1Component,
    Bai9Lab1Component,
    Bai10Lab1Component,
    Bai11Lab1Component,
  ],
})
export class AppModule {}

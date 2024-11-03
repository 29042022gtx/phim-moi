import { Routes } from '@angular/router';
import { Bai2Component } from './bai2/bai2.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai3Component } from './bai3/bai3.component';

export const routes: Routes = [
  {
    path: '',
    component: Bai1Component,
  },
  {
    path: 'bai1',
    component: Bai1Component,
  },
  {
    path: 'bai2',
    component: Bai2Component,
  },
  {
    path: 'bai3',
    component: Bai3Component,
  },
];

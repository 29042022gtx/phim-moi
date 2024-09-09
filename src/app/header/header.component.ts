import { Component } from '@angular/core';
import data from '../../ts/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  data = data;
}

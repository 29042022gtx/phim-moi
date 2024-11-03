import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bai1-star',
  templateUrl: './bai1-star.component.html',
  styleUrl: './bai1-star.component.css',
})
export class Bai1StarComponent {
  @Input() rating: number;
  @Output() outputRating: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 80) / 5;
  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 80) / 5;
  }
  viewRating() {
    this.outputRating.emit(`Đánh giá của sản phẩm là ${this.rating}`);
  }
}


import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styles: ``,
})
export class Bai3Component {
  @Output() event = new EventEmitter<string>();
  inputValue: string = '';

  emit(s: string) {
    this.inputValue = '';
    this.event.emit(s);
  }
}

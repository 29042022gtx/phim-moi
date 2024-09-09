import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import data from '../../ts/data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { addMonthToDate, dateToString } from '../../ts/utility';

@Component({
  selector: 'app-pack-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppModule],
  templateUrl: './pack-page.component.html',
  styleUrl: './pack-page.component.css',
})
export class PackPageComponent {
  packList = data.packList.slice();
  currentID: string = this.packList[1].id;
  quantityControl = new FormControl('1');

  constructor() {
    if (this.isPaid()) {
      this.currentID = data.getCurrentUser().bill.packID;
      let quantity = data.getCurrentUser().bill.quantity;
      this.quantityControl.setValue(String(quantity));
      this.quantityControl.disable();
    }
  }

  getExpiredDate() {
    if (this.isPaid()) {
      return new Date(data.getCurrentUser().bill.expiredDate);
    }
    return addMonthToDate(new Date(), this.getMonthQuantity());
  }

  cancel() {
    this.quantityControl.setValue('1');
    this.quantityControl.enable();
    data.cancelBill();
  }

  isPaid() {
    return data.getCurrentUser().bill.packID.length != 0;
  }

  isCurrentPack(packID: string) {
    if (this.isPaid()) {
      return packID == data.getCurrentUser().bill.packID;
    }
    return packID == this.currentID;
  }

  pay() {
    if (!data.isLoggedIn()) {
      return;
    }
    let monthQuantity = this.getMonthQuantity();
    data.addBill(this.currentID, monthQuantity);
    this.quantityControl.disable();
  }

  choosePack(packID: string) {
    if (this.isPaid()) {
      return;
    }
    this.currentID = packID;
  }

  getMonthQuantity() {
    let monthQuantity = parseInt(String(this.quantityControl.value));
    if (isNaN(monthQuantity)) {
      return 0;
    }
    if (monthQuantity > 12) {
      monthQuantity = 12;
    }
    if (monthQuantity < 1) {
      monthQuantity = 1;
    }
    this.quantityControl.setValue(String(monthQuantity));
    return monthQuantity;
  }

  total() {
    let quantity = this.getMonthQuantity();
    if (quantity == 0) {
      return this.packList[data.getPackIndex(this.currentID)].price;
    }
    if (quantity > 12) {
      quantity = 12;
    }
    if (quantity < 1) {
      quantity = 1;
    }
    this.quantityControl.setValue(String(quantity));
    return this.packList[data.getPackIndex(this.currentID)].price * quantity;
  }

  onBlur() {
    if (this.quantityControl.value == null) {
      this.quantityControl.setValue('1');
    }
  }
}

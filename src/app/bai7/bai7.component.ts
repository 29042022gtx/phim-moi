import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-bai7',
  templateUrl: './bai7.component.html',
  styles: ``,
})
export class Bai7Component {
  studentList: Student[] = [
    {
      fullname: 'Nguyen A',
      birthday: new Date(2000, 5, 1),
      gender: 'Nam',
      mark: 10,
      pic: '/favicon.ico',
    },
    {
      fullname: 'Tran B',
      birthday: new Date(1990, 9, 6),
      gender: 'Nam',
      mark: 9.1,
      pic: '/favicon.ico',
    },
  ];
}

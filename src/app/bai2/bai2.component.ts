import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
function compareDate(date1: Date, date2: Date) {
  let year1 = date1.getFullYear();
  let year2 = date2.getFullYear();
  let month1 = date1.getMonth();
  let month2 = date2.getMonth();
  let dateOfMonth1 = date1.getDate();
  let dateOfMonth2 = date2.getDate();
  if (year1 > year2) {
    return 1;
  }
  if (year1 < year2) {
    return -1;
  }
  if (month1 > month2) {
    return 1;
  }
  if (month1 < month2) {
    return -1;
  }
  if (dateOfMonth1 > dateOfMonth2) {
    return 1;
  }
  if (dateOfMonth1 < dateOfMonth2) {
    return -1;
  }
  return 0;
}

function notFuture(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pickDate = new Date(control.value);
    const notFuture = compareDate(pickDate, new Date()) < 1;
    return notFuture ? null : { notFuture: { value: control.value } };
  };
}
@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrl: './bai2.component.css',
})
export class Bai2Component {
  employeeList: any[] = [
    {
      fullname: 'Than Tai',
      gender: 'Nam',
      salary: 10000000,
      birthday: '2004-03-12',
    },
    {
      fullname: 'Than Dong',
      gender: 'Nam',
      salary: 12000000,
      birthday: '2002-08-23',
    },
    {
      fullname: 'Than Dang',
      gender: 'Nam',
      salary: 15000000,
      birthday: '2002-09-10',
    },
    {
      fullname: 'Tien Nu',
      gender: 'Nu',
      salary: 12000000,
      birthday: '2004-11-06',
    },
  ];
  workingAge: any[] = [
    {
      age: 25,
      bonus: 0.07,
    },
    {
      age: 40,
      bonus: 0.1,
    },
    {
      age: 41,
      bonus: 0.15,
    },
  ];
  formEmployee = new FormGroup({
    fullname: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    birthday: new FormControl<string>('', [Validators.required, notFuture()]),
    gender: new FormControl<string>('Nam'),
    salary: new FormControl<number>(7000000, [
      Validators.required,
      Validators.min(7000000),
    ]),
  });
  updateIndex = -1;

  constructor() {
    this.formEmployee.controls.salary.setValue(null);
  }

  getBonusRate(age: number) {
    let bonus = this.workingAge[0].bonus;
    this.workingAge.some((item) => {
      if (age < item.age) {
        bonus = item.bonus;
        return true;
      }
      return false;
    });
    return bonus;
  }

  getAge(employee: any) {
    const today = new Date();
    const birthday = new Date(employee.birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    if (
      birthday.getMonth() > today.getMonth() ||
      (birthday.getMonth() == today.getMonth() &&
        birthday.getDate() > today.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  getBonus(employee: any) {
    return this.getBonusRate(this.getAge(employee)) * employee.salary;
  }

  edit(index: number) {
    const employee = this.employeeList[index];
    this.formEmployee.controls.fullname.setValue(employee.fullname);
    this.formEmployee.controls.salary.setValue(employee.salary);
    this.formEmployee.controls.gender.setValue(employee.gender);
    this.formEmployee.controls.birthday.setValue(employee.birthday);
    this.formEmployee.markAllAsTouched();
    this.updateIndex = index;
  }

  update() {
    if (this.updateIndex == -1 || this.formEmployee.invalid) {
      return;
    }
    this.formEmployee.markAllAsTouched();
    const employee = this.employeeList[this.updateIndex];
    employee.fullname = this.formEmployee.value.fullname;
    employee.salary = this.formEmployee.value.salary;
    employee.gender = this.formEmployee.value.gender;
    employee.birthday = this.formEmployee.value.birthday;
    this.formEmployee.reset();
    this.formEmployee.controls.gender.setValue('Nam');
    this.updateIndex = -1;
  }

  delete(index: number) {
    this.employeeList.splice(index, 1);
  }

  add() {
    this.formEmployee.markAllAsTouched();
    this.updateIndex = -1;
    if (this.formEmployee.invalid) {
      return;
    }
    this.employeeList.push({
      fullname: this.formEmployee.value.fullname,
      gender: this.formEmployee.value.gender,
      salary: this.formEmployee.value.salary,
      birthday: this.formEmployee.value.birthday,
    });
    this.formEmployee.reset();
    this.formEmployee.controls.gender.setValue('Nam');
  }

  switchFullname(formControl: FormControl) {
    if (formControl.untouched && formControl.pristine) {
      return 0;
    }
    if (formControl.valid) {
      return 1;
    }
    const fcErrors = formControl.errors || {};
    if ('required' in fcErrors) {
      return 2;
    }
    if ('minlength' in fcErrors) {
      return 3;
    }
    if ('maxlength' in fcErrors) {
      return 4;
    }
    return 0;
  }

  switchSalary(formControl: FormControl) {
    if (formControl.untouched && formControl.pristine) {
      return 0;
    }
    if (formControl.valid) {
      return 1;
    }
    const fcErrors = formControl.errors || {};
    if ('required' in fcErrors) {
      return 2;
    }
    if ('min' in fcErrors) {
      return 3;
    }
    return 0;
  }

  switchBirthday(formControl: FormControl) {
    if (formControl.untouched && formControl.pristine) {
      return 0;
    }
    if (formControl.valid) {
      return 1;
    }
    const fcErrors = formControl.errors || {};
    if ('required' in fcErrors) {
      return 2;
    }
    if ('notFuture' in fcErrors) {
      return 3;
    }
    return 0;
  }
}

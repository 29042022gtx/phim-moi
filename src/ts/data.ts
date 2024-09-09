import { addMonthToDate, dateToString } from './utility';
import { User } from './entities/User';
import { Pack } from './entities/Pack';
import movieList from './movieList';
import newsList from './newsList';

class Data {
  currentUserIndex: number = -1;
  movieList = movieList;
  newsList = newsList;
  packList: Pack[] = [
    {
      id: 'pack1',
      name: 'Cơ bản',
      price: 50000,
      limit: 10,
      description: '10 phim thịnh hành',
    },
    {
      id: 'pack2',
      name: 'Tiêu chuẩn',
      price: 75000,
      limit: 20,
      description: '20 phim mới nhất',
    },
    {
      id: 'pack3',
      name: 'Cao cấp',
      price: 80000,
      limit: NaN,
      description: 'Kho phim bất tận',
    },
  ];
  userList: User[] = [
    {
      name: 'admin',
      username: 'admin',
      password: '12345678a*',
      email: 'admin@gmail.com',
      phone: '0123456789',
      bill: {
        packID: '',
        quantity: 0,
        expiredDate: '2000-01-01',
      },
    },
    {
      name: 'User 01',
      username: 'user01',
      password: '12345678a*',
      email: 'user01@gmail.com',
      phone: '0123456789',
      bill: {
        packID: '',
        quantity: 0,
        expiredDate: '2000-01-01',
      },
    },
  ];

  cancelBill() {
    if (!this.isLoggedIn) {
      return;
    }
    this.getCurrentUser().bill.packID = '';
    this.saveData();
  }

  addBill(id: string, monthQuantity: number) {
    if (!this.isLoggedIn) {
      return;
    }
    this.getCurrentUser().bill = {
      packID: id,
      quantity: monthQuantity,
      expiredDate: dateToString(addMonthToDate(new Date(), monthQuantity)),
    };
    this.saveData();
  }

  getPackIndex(id: string) {
    let idx = -1;
    this.packList.some((pack, index) => {
      if (pack.id != id) {
        return false;
      }
      idx = index;
      return true;
    });
    return idx;
  }

  addUser(name = '', username = '', email = '', phone = '', password = '') {
    this.userList.push(this.createUser(name, username, email, phone, password));
    this.saveData();
  }

  logOut() {
    this.currentUserIndex = -1;
    this.saveData();
  }

  logIn(username: string, password: string) {
    this.currentUserIndex = -1;
    this.userList.some((user: User, index) => {
      if (!(user.username == username && user.password == password)) {
        return false;
      }
      this.currentUserIndex = index;
      return true;
    });
    this.saveData();
  }

  isAdmin() {
    if (!this.isLoggedIn) {
      return false;
    }
    return this.getCurrentUser().username == 'admin';
  }

  getCurrentUser() {
    if (!this.isLoggedIn()) {
      return this.createUser();
    }
    return this.userList[this.currentUserIndex];
  }

  isLoggedIn() {
    return (
      this.currentUserIndex >= 0 && this.currentUserIndex < this.userList.length
    );
  }

  saveData() {
    localStorage.setItem('data', JSON.stringify(this));
  }

  private createUser(
    name = '',
    username = '',
    email = '',
    phone = '',
    password = ''
  ) {
    const user: User = {
      name,
      username,
      email,
      phone,
      password,
      bill: {
        packID: '',
        quantity: 0,
        expiredDate: '',
      },
    };
    return user;
  }
}

function getData() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stringData = localStorage.getItem('data');
    if (stringData != null) {
      const data = Object.setPrototypeOf(
        JSON.parse(stringData),
        Data.prototype
      );
      return data as Data;
    }
  }
  return new Data();
}

const data = getData();
// console.log(data);

export default data;

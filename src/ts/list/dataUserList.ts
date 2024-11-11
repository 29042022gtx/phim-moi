import { User } from '../entities/User';

const dataUserList: User[] = [
  {
    name: 'Administrator',
    username: 'administrator',
    password: '12345678a*',
    email: 'admin@gmail.com',
    phone: '0123456789',
    favouriteList: ['mo01', 'mo03'],
    billList: [],
  },
  {
    name: 'User 01',
    username: 'user01',
    password: '12345678a*',
    email: 'user01@gmail.com',
    phone: '0123456789',
    favouriteList: ['mo02', 'mo04', 'mo06'],
    billList: [
      {
        packID: 'pa01',
        paidDate: '2024-8-1',
        monthQuantity: 1,
        canceledDate: '',
      },
      {
        packID: 'pa03',
        paidDate: '2024-10-30',
        monthQuantity: 6,
        canceledDate: '',
      },
    ],
  },
  {
    name: 'User 02',
    username: 'user02',
    password: '12345678a*',
    email: 'user02@gmail.com',
    phone: '0123456789',
    favouriteList: ['mo05', 'mo07'],
    billList: [
      {
        packID: 'pa01',
        paidDate: '2022-12-24',
        monthQuantity: 1,
        canceledDate: '',
      },
    ],
  },
];

export default dataUserList;

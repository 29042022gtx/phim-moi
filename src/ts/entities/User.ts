import { Bill } from './Bill';

export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  favouriteList: string[];
  billList: Bill[];
}

export function createUser(
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
    favouriteList: [],
    billList: [],
  };
  return user;
}

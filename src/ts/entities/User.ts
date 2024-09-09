import { Bill } from './Bill';

export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  bill: Bill;
}

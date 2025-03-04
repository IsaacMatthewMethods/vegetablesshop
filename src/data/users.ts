import { User } from '../types';
import { orders } from './orders';

export const users: User[] = [
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    orders: [orders[0]]
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    orders: [orders[1]]
  },
  {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    orders: []
  }
];

export const currentUser = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user'
};
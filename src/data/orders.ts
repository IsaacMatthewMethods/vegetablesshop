import { Order } from '../types';

export const orders: Order[] = [
  {
    id: '1',
    userId: 'user1',
    items: [
      {
        id: '1',
        name: 'Fresh Carrots',
        price: 1.99,
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
        description: 'Organic, locally grown carrots. Rich in vitamins and fiber.',
        category: 'root',
        stock: 50,
        unit: 'bunch',
        quantity: 2
      },
      {
        id: '4',
        name: 'Spinach',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
        description: 'Nutrient-rich spinach leaves, perfect for salads and cooking.',
        category: 'leafy',
        stock: 25,
        unit: 'bunch',
        quantity: 1
      }
    ],
    total: 6.97,
    status: 'pending',
    address: '123 Main St, Anytown, USA',
    phone: '555-123-4567',
    date: '2025-05-01T10:30:00Z'
  },
  {
    id: '2',
    userId: 'user2',
    items: [
      {
        id: '3',
        name: 'Tomatoes',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
        description: 'Ripe, juicy tomatoes. Great for salads, sauces, and sandwiches.',
        category: 'fruit',
        stock: 40,
        unit: 'lb',
        quantity: 2
      },
      {
        id: '5',
        name: 'Bell Peppers',
        price: 1.79,
        image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83',
        description: 'Colorful bell peppers, sweet and crunchy.',
        category: 'fruit',
        stock: 35,
        unit: 'each',
        quantity: 3
      }
    ],
    total: 13.35,
    status: 'approved',
    address: '456 Oak Ave, Somewhere, USA',
    phone: '555-987-6543',
    date: '2025-05-02T14:15:00Z'
  }
];
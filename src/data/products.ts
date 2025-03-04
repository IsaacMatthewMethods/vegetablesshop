import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Carrots',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37',
    description: 'Organic, locally grown carrots. Rich in vitamins and fiber.',
    category: 'root',
    stock: 50,
    unit: 'bunch'
  },
  {
    id: '2',
    name: 'Broccoli',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc',
    description: 'Fresh green broccoli florets, perfect for stir-fries and salads.',
    category: 'cruciferous',
    stock: 30,
    unit: 'head'
  },
  {
    id: '3',
    name: 'Tomatoes',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea',
    description: 'Ripe, juicy tomatoes. Great for salads, sauces, and sandwiches.',
    category: 'fruit',
    stock: 40,
    unit: 'lb'
  },
  {
    id: '4',
    name: 'Spinach',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
    description: 'Nutrient-rich spinach leaves, perfect for salads and cooking.',
    category: 'leafy',
    stock: 25,
    unit: 'bunch'
  },
  {
    id: '5',
    name: 'Bell Peppers',
    price: 1.79,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83',
    description: 'Colorful bell peppers, sweet and crunchy.',
    category: 'fruit',
    stock: 35,
    unit: 'each'
  },
  {
    id: '6',
    name: 'Cucumber',
    price: 1.29,
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e',
    description: 'Cool and refreshing cucumbers, perfect for salads.',
    category: 'fruit',
    stock: 45,
    unit: 'each'
  },
  {
    id: '7',
    name: 'Potatoes',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    description: 'Versatile potatoes, great for roasting, mashing, or frying.',
    category: 'root',
    stock: 60,
    unit: 'bag'
  },
  {
    id: '8',
    name: 'Onions',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc',
    description: 'Essential cooking ingredient, adds flavor to any dish.',
    category: 'root',
    stock: 70,
    unit: 'lb'
  }
];
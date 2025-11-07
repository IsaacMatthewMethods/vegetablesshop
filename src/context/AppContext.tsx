import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product, CartItem, Order, User } from '../types';
import { products as initialProducts } from '../data/products';
import { users as initialUsers } from '../data/users';
import { orders as initialOrders } from '../data/orders';

interface AppContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  placeOrder: (address: string, phone: string) => void;
  currentUser: User | null;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  useEffect(() => {
    if (token) {
      // In a real app, you would fetch the user data from an API
      const user = users.find(u => u.id === 'user1'); // Mocking a logged in user
      if (user) {
        setCurrentUser({ ...user, orders: orders.filter(o => o.userId === user.id) });
      }
    } else {
      setCurrentUser(null);
    }
  }, [token, users, orders]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (address: string, phone: string) => {
    if (currentUser) {
      const newOrder: Order = {
        id: (orders.length + 1).toString(),
        userId: currentUser.id,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: 'pending',
        address,
        phone,
        date: new Date().toISOString(),
      };
      setOrders(prevOrders => [...prevOrders, newOrder]);
      setCart([]);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        products,
        cart,
        addToCart,
        clearCart,
        placeOrder,
        currentUser,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

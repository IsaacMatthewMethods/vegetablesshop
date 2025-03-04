import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, User } from '../types';
import { products as initialProducts } from '../data/products';
import { orders as initialOrders } from '../data/orders';
import { users, currentUser as initialCurrentUser } from '../data/users';

interface AppContextType {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  currentUser: User | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (address: string, phone: string) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  login: (userId: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Initialize with demo user
  useEffect(() => {
    const user = users.find(u => u.id === initialCurrentUser.id);
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (address: string, phone: string) => {
    if (!currentUser || cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      userId: currentUser.id,
      items: [...cart],
      total,
      status: 'pending',
      address,
      phone,
      date: new Date().toISOString()
    };
    
    setOrders(prevOrders => [...prevOrders, newOrder]);
    
    // Update user's orders
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        orders: [...currentUser.orders, newOrder]
      };
      setCurrentUser(updatedUser);
    }
    
    clearCart();
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId 
          ? { ...order, status } 
          : order
      )
    );
    
    // Update in user's orders too
    if (currentUser) {
      const updatedOrders = currentUser.orders.map(order => 
        order.id === orderId 
          ? { ...order, status } 
          : order
      );
      
      setCurrentUser({
        ...currentUser,
        orders: updatedOrders
      });
    }
  };

  const updateProduct = (product: Product) => {
    setProducts(prevProducts => 
      prevProducts.map(p => 
        p.id === product.id 
          ? product 
          : p
      )
    );
  };

  const addProduct = (product: Product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const removeProduct = (productId: string) => {
    setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
  };

  const login = (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (user) {
      setCurrentUser(user);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    clearCart();
  };

  return (
    <AppContext.Provider value={{
      products,
      cart,
      orders,
      currentUser,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      placeOrder,
      updateOrderStatus,
      updateProduct,
      addProduct,
      removeProduct,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
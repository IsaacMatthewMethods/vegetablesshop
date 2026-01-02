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

  orders: Order[];

  addToCart: (product: Product) => void;

  clearCart: () => void;

  placeOrder: (address: string, phone: string) => void;

  currentUser: User | null;

  logout: () => void;

  updateOrderStatus: (orderId: string, status: 'pending' | 'approved' | 'delivered' | 'cancelled') => void;

  updateProduct: (product: Product) => void;

  addProduct: (product: Product) => void;

  removeProduct: (productId: string) => void;

  updateCartItemQuantity: (productId: string, quantity: number) => void;

  removeFromCart: (productId: string) => void;

  currency: 'USD' | 'NGN';

  exchangeRate: number;

  setCurrency: (currency: 'USD' | 'NGN') => void;

}



const AppContext = createContext<AppContextType | undefined>(undefined);



export const AppProvider = ({ children }: { children: ReactNode }) => {

  const [token, setTokenState] = useState<string | null>(() => {

    if (typeof window !== 'undefined') {

      return localStorage.getItem('token');

    }

    return null;

  });

  const [products, setProducts] = useState<Product[]>([]);

  const [cart, setCart] = useState<CartItem[]>([]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [users, setUsers] = useState<User[]>([]);

  const [orders, setOrders] = useState<Order[]>([]);

  const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');

  // Hardcoded exchange rate. In a real app, you would fetch this from an API.

  const [exchangeRate, setExchangeRate] = useState(1500);



  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch('/api/products');

        if (response.ok) {

          const data = await response.json();

          setProducts(data);

        }

      } catch (error) {

        console.error('Error fetching products:', error);

      }

    };

    fetchProducts();

  }, []);



  const setToken = (newToken: string | null) => {

    setTokenState(newToken);

    if (typeof window !== 'undefined') {

      if (newToken) {

        localStorage.setItem('token', newToken);

      } else {

        localStorage.removeItem('token');

      }

    }

  };



  useEffect(() => {

    const fetchUserAndOrders = async () => {

      if (token) {

        try {

          // Fetch user data

          const userResponse = await fetch('/api/me', {

            headers: { 'Authorization': `Bearer ${token}` }

          });



          if (userResponse.ok) {

            const userData = await userResponse.json();

            

            // Fetch orders data

            const ordersResponse = await fetch('/api/my-orders', {

              headers: { 'Authorization': `Bearer ${token}` }

            });



            if (ordersResponse.ok) {

              const ordersData = await ordersResponse.json();

              setOrders(ordersData);

              setCurrentUser({ ...userData, orders: ordersData });

            } else {

              // Handle orders fetch error

              setOrders([]);

              setCurrentUser({ ...userData, orders: [] });

            }

          } else {

            // Handle invalid token case

            setToken(null);

            setCurrentUser(null);

            setOrders([]);

          }

        } catch (error) {

          console.error('Error fetching user or orders:', error);

          setToken(null);

          setCurrentUser(null);

          setOrders([]);

        }

      } else {

        setCurrentUser(null);

        setOrders([]);

      }

    };

    fetchUserAndOrders();

  }, [token]);



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



  const placeOrder = async (address: string, phone: string) => {

    if (currentUser && token) {

      try {

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const response = await fetch('/api/orders', {

          method: 'POST',

          headers: {

            'Content-Type': 'application/json',

            'Authorization': `Bearer ${token}`

          },

          body: JSON.stringify({ address, phone, cart, total })

        });



        if (response.ok) {

          const newOrder = await response.json();

          setOrders(prevOrders => [...prevOrders, newOrder]);

          setCart([]);

        } else {

          console.error('Failed to place order');

        }

      } catch (error) {

        console.error('Error placing order:', error);

      }

    }

  };



  const logout = () => {

    setToken(null);

  };



  const updateOrderStatus = async (orderId: string, status: 'pending' | 'approved' | 'delivered' | 'cancelled') => {

    if (token) {

      try {

        const response = await fetch(`/api/orders/${orderId}`, {

          method: 'PUT',

          headers: {

            'Content-Type': 'application/json',

            'Authorization': `Bearer ${token}`

          },

          body: JSON.stringify({ status })

        });



        if (response.ok) {

          setOrders(prevOrders =>

            prevOrders.map(order =>

              order.id === orderId ? { ...order, status } : order

            )

          );

        } else {

          console.error('Failed to update order status');

        }

      } catch (error) {

        console.error('Error updating order status:', error);

      }

    }

  };



  const updateProduct = async (product: Product) => {

    if (token) {

      try {

        const response = await fetch(`/api/products/${product.id}`, {

          method: 'PUT',

          headers: {

            'Content-Type': 'application/json',

            'Authorization': `Bearer ${token}`

          },

          body: JSON.stringify(product)

        });

        if (response.ok) {

          const updatedProduct = await response.json();

          setProducts(prevProducts =>

            prevProducts.map(p => (p.id === updatedProduct.id ? updatedProduct : p))

          );

        }

      } catch (error) {

        console.error('Error updating product:', error);

      }

    }

  };



  const addProduct = async (product: Product) => {

    if (token) {

      try {

        const response = await fetch('/api/products', {

          method: 'POST',

          headers: {

            'Content-Type': 'application/json',

            'Authorization': `Bearer ${token}`

          },

          body: JSON.stringify(product)

        });

        if (response.ok) {

          const newProduct = await response.json();

          setProducts(prevProducts => [...prevProducts, newProduct]);

        }

      } catch (error) {

        console.error('Error adding product:', error);

      }

    }

  };



  const removeProduct = async (productId: string) => {

    if (token) {

      try {

        const response = await fetch(`/api/products/${productId}`, {

          method: 'DELETE',

          headers: {

            'Authorization': `Bearer ${token}`

          }

        });

        if (response.ok) {

          setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));

        }

      } catch (error) {

        console.error('Error removing product:', error);

      }

    }

  };



  const updateCartItemQuantity = (productId: string, quantity: number) => {

    setCart(prevCart =>

      prevCart.map(item =>

        item.id === productId ? { ...item, quantity } : item

      )

    );

  };



  const removeFromCart = (productId: string) => {

    setCart(prevCart => prevCart.filter(item => item.id !== productId));

  };



  return (

    <AppContext.Provider

      value={{

        token,

        setToken,

        products,

        cart,

        orders,

        addToCart,

        clearCart,

        placeOrder,

        currentUser,

        logout,

        updateOrderStatus,

        updateProduct,

        addProduct,

        removeProduct,

        updateCartItemQuantity,

        removeFromCart,

        currency,

        exchangeRate,

        setCurrency,

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

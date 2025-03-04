import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useAppContext } from '../context/AppContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useAppContext();

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)} / {item.unit}</p>
      </div>
      
      <div className="flex items-center">
        <button 
          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Minus size={16} />
        </button>
        
        <span className="mx-3 w-8 text-center">{item.quantity}</span>
        
        <button 
          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="ml-6 text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors mt-1"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
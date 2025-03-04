import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-bold">${product.price.toFixed(2)} / {product.unit}</p>
          <p className="text-sm text-gray-500">{product.stock} in stock</p>
        </div>
        <div className="mt-4 flex justify-between">
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white px-3 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md flex items-center hover:bg-gray-300 transition-colors"
          >
            <Info size={16} className="mr-1" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
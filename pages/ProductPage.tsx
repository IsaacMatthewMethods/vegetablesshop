import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Truck, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../src/context/AppContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, addToCart } = useAppContext();
  const [quantity, setQuantity] = React.useState(1);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
        <ArrowLeft size={16} className="mr-1" />
        Back to Shop
      </Link>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-gray-600">/ {product.unit}</span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Truck size={16} className="mr-2 text-green-600" />
                <span>Free delivery on orders over $50</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck size={16} className="mr-2 text-green-600" />
                <span>Quality guarantee</span>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center py-1 border-t border-b border-gray-300"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <Link 
                to="/cart" 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                View Cart
              </Link>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Category: <span className="font-medium capitalize">{product.category}</span>
              </p>
              <p className="text-sm text-gray-600">
                Stock: <span className="font-medium">{product.stock} {product.unit}s available</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${relatedProduct.id}`} className="text-lg font-semibold text-gray-800 hover:text-green-600">
                    {relatedProduct.name}
                  </Link>
                  <p className="text-green-600 font-bold mt-1">${relatedProduct.price.toFixed(2)} / {relatedProduct.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
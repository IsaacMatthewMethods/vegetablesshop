import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import { useAppContext } from '../context/AppContext';

const FeaturedProducts: React.FC = () => {
  const { products } = useAppContext();

  // Get 4 random products to feature
  const featuredProducts = React.useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [products]);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 mt-2">Discover our selection of fresh vegetables</p>
        </div>
        
        <ProductGrid products={featuredProducts} />
        
        <div className="text-center mt-10">
          <Link 
            to="/shop" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
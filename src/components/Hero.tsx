import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-green-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c" 
          alt="Fresh vegetables" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Vegetables Delivered to Your Doorstep
          </h1>
          <p className="text-xl mb-8">
            Discover the freshest, locally-grown vegetables for your family. 
            From farm to table, we ensure quality and freshness in every delivery.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/shop" 
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
            >
              <ShoppingBag size={20} className="mr-2" />
              Shop Now
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-green-600 border-2 border-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
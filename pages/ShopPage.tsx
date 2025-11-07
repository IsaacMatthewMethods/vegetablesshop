import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../src/components/ProductGrid';
import { useAppContext } from '../src/context/AppContext';
import { Filter, Search } from 'lucide-react';

const ShopPage: React.FC = () => {
  const { products } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = products ? [...new Set(products.map(product => product.category))] : [];

  // Initialize from URL params
  useEffect(() => {
    if (products) {
      const category = searchParams.get('category') || '';
      setSelectedCategory(category);
    }
  }, [searchParams, products]);

  // Filter products
  useEffect(() => {
    if (products) {
      let result = [...products];
      
      // Filter by search term
      if (searchTerm) {
        result = result.filter(product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Filter by category
      if (selectedCategory) {
        result = result.filter(product => product.category === selectedCategory);
      }
      
      // Filter by price range
      result = result.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      setFilteredProducts(result);
    }
  }, [products, searchTerm, selectedCategory, priceRange]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseFloat(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, 10]);
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Shop Fresh Vegetables</h1>
        <p className="text-gray-600">Browse our selection of fresh, organic vegetables</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile filter toggle */}
        <button 
          className="md:hidden flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} className="mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        {/* Filters sidebar */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            {/* Search */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={category} className="ml-2 text-gray-700 capitalize">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-2">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
        
        {/* Products */}
        <div className="md:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters or search term</p>
            </div>
          ) : (
            <>
              <p className="mb-4 text-gray-600">{filteredProducts.length} products found</p>
              <ProductGrid products={filteredProducts} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
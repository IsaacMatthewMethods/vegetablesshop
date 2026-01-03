import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductGrid from '../src/components/ProductGrid';
import { useAppContext } from '../src/context/AppContext';
import { Filter, Search } from 'lucide-react';
import { formatCurrency, debounce } from '../src/utils';

const ShopPage: React.FC = () => {
  const { products, isLoading, currency, exchangeRate } = useAppContext();
  const router = useRouter();
  const { q, category } = router.query;

  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [searchTerm, setSearchTermState] = useState((q as string) || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    (category as string) || null
  );
  const [priceRangeState, setPriceRangeState] = useState<[number, number]>([0, 100]);
  const [maxProductPrice, setMaxProductPrice] = useState(100);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Debounced setters
  const debouncedSetSearchTerm = React.useCallback(
    debounce((value: string) => setSearchTermState(value), 300),
    []
  );

  const debouncedSetPriceRange = React.useCallback(
    debounce((newRange: [number, number]) => setPriceRangeState(newRange), 300),
    []
  );
  // ... other code ...

  // Effect to set initial price range and max product price
  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setMaxProductPrice(maxPrice);
      // Only set initial priceRange if it's still at default or invalid
      if (priceRangeState[0] === 0 && priceRangeState[1] === 100) { // Check if default initial values
        setPriceRangeState([minPrice, maxPrice]);
      } else {
        // Ensure current range is within new max/min bounds
        setPriceRangeState(prev => [
          Math.max(minPrice, Math.min(prev[0], maxPrice)),
          Math.max(minPrice, Math.min(prev[1], maxPrice)),
        ]);
      }
    }
  }, [products]); // Recalculate when products change

    useEffect(() => {

      let filtered = products;

  

          if (searchTerm) {

  

            filtered = filtered.filter((p) =>

  

              p.name.toLowerCase().includes(searchTerm.toLowerCase())

  

            );

  

          }

  

      if (selectedCategory) {

        filtered = filtered.filter((p) => p.category === selectedCategory);

      }

  

      filtered = filtered.filter(

        (p) => p.price >= priceRangeState[0] && p.price <= priceRangeState[1]

      );

  

      setFilteredProducts(filtered);

  

      const params = new URLSearchParams();

      if (searchTerm) params.set('q', searchTerm);

      if (selectedCategory) params.set('category', selectedCategory);

      

      const newQueryString = params.toString();

      if (newQueryString !== router.asPath.split('?')[1]) {

        router.replace({

          pathname: router.pathname,

          query: newQueryString,

        });

      }

    }, [searchTerm, selectedCategory, priceRangeState, products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newPriceRange = [...priceRangeState] as [number, number];
    newPriceRange[index] = parseFloat(e.target.value);
    if (newPriceRange[0] > newPriceRange[1]) {
      newPriceRange.reverse();
    }
    debouncedSetPriceRange(newPriceRange);
  };

  const clearFilters = () => {
    setSearchTermState('');
    setSelectedCategory(null);
    // Reset price range to max/min of current products
    if (products.length > 0) {
      const prices = products.map(p => p.price);
      setPriceRangeState([Math.min(...prices), Math.max(...prices)]);
    } else {
      setPriceRangeState([0, 100]); // Fallback if no products
    }
  };
  // ...
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Shop Fresh Vegetables
        </h1>
        <p className="text-gray-600">
          Browse our selection of fresh, organic vegetables
        </p>
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
        <div
          className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}
        >
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm} // Use searchTerm for controlled input
                  onChange={(e) => debouncedSetSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={category}
                      className="ml-2 text-gray-700 capitalize"
                    >
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
                  <span>
                    {formatCurrency(priceRangeState[0], currency, exchangeRate)}
                  </span>
                  <span>
                    {formatCurrency(priceRangeState[1], currency, exchangeRate)}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max={maxProductPrice} // Use dynamic max
                    step="0.5"
                    value={priceRangeState[0]} // Use priceRangeState
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxProductPrice} // Use dynamic max
                    step="0.5"
                    value={priceRangeState[1]} // Use priceRangeState
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
              <p className="text-gray-600">
                Try adjusting your filters or search term
              </p>
            </div>
          ) : (
            <>
              <p className="mb-4 text-gray-600">
                {filteredProducts.length} products found
              </p>
              <ProductGrid products={filteredProducts} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { cart, currentUser } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-yellow-300">Fresh</span>Harvest
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-200 transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-yellow-200 transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-yellow-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-yellow-200 transition-colors">Contact</Link>
            
            {currentUser?.role === 'admin' && (
              <Link to="/admin" className="hover:text-yellow-200 transition-colors">Admin</Link>
            )}
            
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              <Link to={currentUser ? "/dashboard" : "/login"}>
                <User size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-yellow-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="hover:text-yellow-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/about" className="hover:text-yellow-200 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-yellow-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              
              {currentUser?.role === 'admin' && (
                <Link to="/admin" className="hover:text-yellow-200 transition-colors" onClick={() => setIsMenuOpen(false)}>Admin</Link>
              )}
              
              <div className="flex items-center space-x-4 pt-2">
                <Link to="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart size={24} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>
                
                <Link to={currentUser ? "/dashboard" : "/login"} onClick={() => setIsMenuOpen(false)}>
                  <User size={24} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
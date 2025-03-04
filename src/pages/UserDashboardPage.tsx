import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, LogOut, Package } from 'lucide-react';
import OrderItem from '../components/OrderItem';
import { useAppContext } from '../context/AppContext';

const UserDashboardPage: React.FC = () => {
  const { currentUser, logout } = useAppContext();
  
  if (!currentUser) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view your dashboard.
          </p>
          <Link 
            to="/login" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <User size={24} className="text-green-600" />
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">{currentUser.name}</h2>
                <p className="text-sm text-gray-600">{currentUser.email}</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <Link 
                to="/dashboard" 
                className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg"
              >
                <Package size={18} className="mr-2" />
                My Orders
              </Link>
              <Link 
                to="/shop" 
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <ShoppingBag size={18} className="mr-2" />
                Shop
              </Link>
              <button 
                onClick={logout}
                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full text-left"
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">My Orders</h2>
            
            {currentUser.orders.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Orders Yet</h3>
                <p className="text-gray-600 mb-4">
                  You haven't placed any orders yet. Start shopping to place your first order!
                </p>
                <Link 
                  to="/shop" 
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-flex items-center transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {currentUser.orders.map(order => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
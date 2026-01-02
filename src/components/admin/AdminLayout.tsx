
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, ShoppingBag, Package, Users, BarChart } from 'lucide-react';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white flex flex-col">
        <div className="p-4 border-b border-green-700">
          <h2 className="text-2xl font-bold">Admin</h2>
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/admin" 
                end
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors ${isActive ? 'bg-green-700' : 'hover:bg-green-700'}`
                }
              >
                <BarChart size={20} className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/products"
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors ${isActive ? 'bg-green-700' : 'hover:bg-green-700'}`
                }
              >
                <Package size={20} className="mr-3" />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/orders"
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors ${isActive ? 'bg-green-700' : 'hover:bg-green-700'}`
                }
              >
                <ShoppingBag size={20} className="mr-3" />
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/users"
                className={({ isActive }) => 
                  `flex items-center p-2 rounded-lg transition-colors ${isActive ? 'bg-green-700' : 'hover:bg-green-700'}`
                }
              >
                <Users size={20} className="mr-3" />
                Users
              </NavLink>
            </li>
            <li className="pt-4 mt-4 border-t border-green-700">
              <NavLink 
                to="/"
                className="flex items-center p-2 rounded-lg transition-colors hover:bg-green-700"
              >
                <Home size={20} className="mr-3" />
                Back to Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

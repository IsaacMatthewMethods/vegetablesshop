
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, ShoppingBag, Package, Users, BarChart } from 'lucide-react';

const AdminLayout: React.FC = ({ children }) => {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;
  
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
              <Link 
                href="/admin" 
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  isActive('/admin') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <BarChart size={20} className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/products"
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  isActive('/admin/products') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <Package size={20} className="mr-3" />
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/orders"
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  isActive('/admin/orders') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <ShoppingBag size={20} className="mr-3" />
                Orders
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/users"
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  isActive('/admin/users') ? 'bg-green-700' : 'hover:bg-green-700'
                }`}
              >
                <Users size={20} className="mr-3" />
                Users
              </Link>
            </li>
            <li className="pt-4 mt-4 border-t border-green-700">
              <Link 
                href="/"
                className="flex items-center p-2 rounded-lg transition-colors hover:bg-green-700"
              >
                <Home size={20} className="mr-3" />
                Back to Shop
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

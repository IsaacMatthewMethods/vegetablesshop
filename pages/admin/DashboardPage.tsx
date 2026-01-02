import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../src/context/AppContext';
import StatCard from '../../src/components/admin/StatCard';
import SalesChart from '../../src/components/admin/SalesChart';
import { DollarSign, ShoppingBag, Package, Users } from 'lucide-react';
import { Order } from '../../src/types';
import OrderItem from '../../src/components/OrderItem';
import { formatCurrency } from '../../src/utils';

const DashboardPage: React.FC = () => {
  const { products, token, currency, exchangeRate, updateOrderStatus } = useAppContext();
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [totalUsers, setTotalUsers] = useState(0); // Mocked for now

  useEffect(() => {
    const fetchAllOrders = async () => {
      if (token) {
        try {
          const response = await fetch('/api/all-orders', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) {
            const data = await response.json();
            setAllOrders(data);
          }
        } catch (error) {
          console.error('Error fetching all orders:', error);
        }
      }
    };
    // In a real app, you'd also fetch total users
    setTotalUsers(123); // Mock data
    fetchAllOrders();
  }, [token]);

  const totalRevenue = allOrders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = allOrders.length;
  const totalProducts = products.length;

  const recentOrders = allOrders.slice(0, 5);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Revenue" 
          value={formatCurrency(totalRevenue, currency, exchangeRate)} 
          icon={DollarSign} 
        />
        <StatCard 
          title="Total Orders" 
          value={totalOrders.toString()} 
          icon={ShoppingBag} 
        />
        <StatCard 
          title="Total Products" 
          value={totalProducts.toString()} 
          icon={Package} 
        />
        <StatCard 
          title="Total Users" 
          value={totalUsers.toString()} 
          icon={Users} 
        />
      </div>

      {/* Charts and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order.id} className="text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Order #{order.id}</span>
                    <span className="text-gray-600">{formatCurrency(order.total, currency, exchangeRate)}</span>
                  </div>
                  <div className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Orders List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Orders</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {allOrders.map(order => (
            <OrderItem key={order.id} order={order} isAdmin={true} onUpdateStatus={updateOrderStatus} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;

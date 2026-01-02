
import React, { useEffect, useState } from 'react';
import { Order } from '../../types';
import { useAppContext } from '../../context/AppContext';
import OrderItem from '../OrderItem';

const OrdersTable: React.FC = () => {
  const { token, updateOrderStatus } = useAppContext();
  const [allOrders, setAllOrders] = useState<Order[]>([]);

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
    fetchAllOrders();
  }, [token]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Orders</h2>
      <div className="space-y-4">
        {allOrders.map(order => (
          <OrderItem key={order.id} order={order} isAdmin={true} onUpdateStatus={updateOrderStatus} />
        ))}
      </div>
    </div>
  );
};

export default OrdersTable;

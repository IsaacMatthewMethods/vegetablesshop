
import React from 'react';
import OrdersTable from '../../src/components/admin/OrdersTable';

const OrdersPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Orders</h1>
      <OrdersTable />
    </div>
  );
};

export default OrdersPage;

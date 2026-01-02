
import React from 'react';
import ProductTable from '../../src/components/admin/ProductTable';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Products</h1>
      <ProductTable />
    </div>
  );
};

export default ProductsPage;

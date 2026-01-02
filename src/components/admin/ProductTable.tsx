
import React, { useState } from 'react';
import { Product } from '../../types';
import { useAppContext } from '../../context/AppContext';
import { formatCurrency } from '../../utils';
import { Edit, Trash2 } from 'lucide-react';
import AddProductModal from './AddProductModal';

const ProductTable: React.FC = () => {
  const { products, removeProduct, currency, exchangeRate } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: Add functionality for editing products

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Add Product
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{formatCurrency(product.price, currency, exchangeRate)}</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => removeProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ProductTable;

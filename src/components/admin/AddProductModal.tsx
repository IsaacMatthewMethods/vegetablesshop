
import React, { useState } from 'react';
import { Product } from '../../types';
import { useAppContext } from '../../context/AppContext';
import { X } from 'lucide-react';

interface AddProductModalProps {
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
  const { addProduct } = useAppContext();
  const [product, setProduct] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: '',
    stock: 0,
    unit: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'stock') {
      setProduct(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!product.name || !product.price) {
      alert('Please fill in at least name and price.');
      return;
    }
    addProduct(product as Product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={product.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input type="text" name="category" value={product.category} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input type="number" name="stock" value={product.stock} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Unit</label>
            <input type="text" name="unit" value={product.unit} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" value={product.description} onChange={handleChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" name="image" value={product.image} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;

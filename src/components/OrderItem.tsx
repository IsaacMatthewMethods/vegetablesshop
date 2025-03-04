import React from 'react';
import { Order } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderItemProps {
  order: Order;
  isAdmin?: boolean;
  onUpdateStatus?: (orderId: string, status: Order['status']) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, isAdmin = false, onUpdateStatus }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="border rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <p className="font-medium">Order #{order.id}</p>
          <p className="text-sm text-gray-500">{formatDate(order.date)}</p>
        </div>
        
        <div className="flex items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
          <span className="ml-4 text-gray-500">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-gray-200">
          <div className="mb-4">
            <h4 className="font-medium mb-2">Shipping Information</h4>
            <p className="text-gray-700">Address: {order.address}</p>
            <p className="text-gray-700">Phone: {order.phone}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Order Items</h4>
            <div className="space-y-2">
              {order.items.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-10 h-10 object-cover rounded mr-3"
                    />
                    <span>{item.name} x {item.quantity}</span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center font-medium text-lg border-t border-gray-200 pt-3">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          
          {isAdmin && onUpdateStatus && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium mb-2">Update Status</h4>
              <div className="flex space-x-2">
                <button 
                  onClick={() => onUpdateStatus(order.id, 'pending')}
                  className={`px-3 py-1 rounded text-sm ${order.status === 'pending' ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-800'}`}
                >
                  Pending
                </button>
                <button 
                  onClick={() => onUpdateStatus(order.id, 'approved')}
                  className={`px-3 py-1 rounded text-sm ${order.status === 'approved' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'}`}
                >
                  Approved
                </button>
                <button 
                  onClick={() => onUpdateStatus(order.id, 'delivered')}
                  className={`px-3 py-1 rounded text-sm ${order.status === 'delivered' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800'}`}
                >
                  Delivered
                </button>
                <button 
                  onClick={() => onUpdateStatus(order.id, 'cancelled')}
                  className={`px-3 py-1 rounded text-sm ${order.status === 'cancelled' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800'}`}
                >
                  Cancelled
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderItem;
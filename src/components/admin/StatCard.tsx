
import React from 'react';
import { Icon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
      <div className="bg-green-100 p-3 rounded-full">
        <Icon className="text-green-600" size={24} />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;

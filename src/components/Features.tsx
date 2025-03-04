import React from 'react';
import { Truck, Leaf, Clock, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck size={36} className="text-green-600" />,
      title: 'Fast Delivery',
      description: 'Get your vegetables delivered to your doorstep within 24 hours of ordering.'
    },
    {
      icon: <Leaf size={36} className="text-green-600" />,
      title: 'Organic & Fresh',
      description: 'All our vegetables are organically grown and harvested fresh from local farms.'
    },
    {
      icon: <Clock size={36} className="text-green-600" />,
      title: 'Convenient Shopping',
      description: 'Shop anytime, anywhere with our easy-to-use online platform.'
    },
    {
      icon: <ShieldCheck size={36} className="text-green-600" />,
      title: 'Quality Guaranteed',
      description: 'We guarantee the quality of our products or your money back.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">We provide the best service for our customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
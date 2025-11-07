import React from 'react';
import { Leaf, Truck, Users, Heart } from 'lucide-react';
import Newsletter from '../src/components/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-green-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29" 
            alt="Vegetable farm" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-xl mb-4">
              We're passionate about bringing fresh, organic vegetables directly from local farms to your table.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At FreshHarvest, our mission is to make fresh, organic vegetables accessible to everyone while supporting local farmers and promoting sustainable agriculture. We believe that healthy eating should be easy, affordable, and environmentally responsible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Leaf size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Sustainability</h3>
                </div>
                <p className="text-gray-600">
                  We work exclusively with farmers who practice sustainable farming methods, minimizing environmental impact and preserving the land for future generations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Heart size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Health</h3>
                </div>
                <p className="text-gray-600">
                  We believe that fresh, organic vegetables are the foundation of a healthy diet. Our goal is to make nutritious food accessible to all communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. We Source</h3>
              <p className="text-gray-600">
                We partner with local farmers who grow organic vegetables using sustainable practices. We carefully select the freshest produce each day.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. You Order</h3>
              <p className="text-gray-600">
                Browse our selection of fresh vegetables online and place your order with just a few clicks. Choose what you need, when you need it.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. We Deliver</h3>
              <p className="text-gray-600">
                We deliver your order directly to your doorstep, ensuring that the vegetables arrive fresh and in perfect condition for your enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                alt="John Smith" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-green-600">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                With 15 years of experience in sustainable agriculture, John founded FreshHarvest to connect local farmers with consumers.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                alt="Sarah Johnson" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-green-600">Head of Operations</p>
              <p className="text-gray-600 mt-2">
                Sarah ensures that our operations run smoothly, from sourcing the best produce to delivering it to your doorstep.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                alt="Michael Chen" 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-green-600">Farm Relations</p>
              <p className="text-gray-600 mt-2">
                Michael works directly with our partner farms to ensure they meet our quality and sustainability standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default AboutPage;
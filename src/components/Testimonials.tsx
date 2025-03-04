import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Cook',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'The vegetables I receive are always fresh and of high quality. The delivery is prompt and the service is excellent!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      content: 'As a restaurant owner, quality is paramount. FreshHarvest consistently delivers the best produce for my kitchen.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Health Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      content: 'I love that I can get organic vegetables delivered right to my door. It has made maintaining a healthy diet so much easier!',
      rating: 4
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Testimonials from our satisfied customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import Hero from '../src/components/Hero';
import FeaturedProducts from '../src/components/FeaturedProducts';
import Features from '../src/components/Features';
import Testimonials from '../src/components/Testimonials';
import Newsletter from '../src/components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
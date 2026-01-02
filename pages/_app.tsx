import React from 'react';
import '../src/index.css';
import { AppProvider } from '../src/context/AppContext';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const AppRouter = dynamic(() => import('../src/components/AppRouter'), { ssr: false });

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppProvider>
        <div className="flex-grow">
          <AppRouter />
        </div>
      </AppProvider>
    </div>
  );
};

export default App;
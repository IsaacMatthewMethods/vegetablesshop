import React from 'react';
import '../src/index.css';
import { AppProvider } from '../src/context/AppContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default MyApp;
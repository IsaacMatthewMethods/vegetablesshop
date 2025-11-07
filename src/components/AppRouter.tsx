import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import UserDashboardPage from '../../pages/UserDashboardPage';
import ProtectedRoute from './ProtectedRoute';
import ShopPage from '../../pages/ShopPage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';
import ClientOnly from './ClientOnly';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <HistoryRouter history={history} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ClientOnly>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </ClientOnly>
    </HistoryRouter>
  );
};

export default AppRouter;

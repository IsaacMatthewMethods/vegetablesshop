import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter, useLocation } from 'react-router-dom';
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
import AdminLayout from './admin/AdminLayout';
import DashboardPage from '../../pages/admin/DashboardPage';
import ProductsPage from '../../pages/admin/ProductsPage';
import OrdersPage from '../../pages/admin/OrdersPage';
import UsersPage from '../../pages/admin/UsersPage';

const history: any = createBrowserHistory();

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <ClientOnly>
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </ClientOnly>
  );
};

const AppRouter = () => {
  return (
    <HistoryRouter history={history} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppLayout>
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
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </AppLayout>
    </HistoryRouter>
  );
};

export default AppRouter;

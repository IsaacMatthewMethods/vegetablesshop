import React from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../context/AppContext';

const ProtectedRoute = ({ children, adminOnly = false }: { children: React.ReactNode, adminOnly?: boolean }) => {
  const { token, currentUser } = useAppContext();
  const router = useRouter();

  if (!token) {
    router.push('/login');
    return null;
  }

  if (adminOnly && currentUser?.role !== 'admin') {
    router.push('/');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

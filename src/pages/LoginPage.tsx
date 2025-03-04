import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { users } from '../data/users';

const LoginPage: React.FC = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();
  
  const handleUserLogin = (userId: string) => {
    login(userId);
    
    // Redirect based on user role
    const user = users.find(u => u.id === userId);
    if (user?.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
        
        <p className="text-gray-600 mb-6 text-center">
          For demonstration purposes, please select a user to login as:
        </p>
        
        <div className="space-y-4">
          {users.map(user => (
            <button
              key={user.id}
              onClick={() => handleUserLogin(user.id)}
              className="w-full p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-xs text-gray-500 mt-1 capitalize">Role: {user.role}</p>
            </button>
          ))}
        </div>
        
        <p className="mt-6 text-sm text-gray-500 text-center">
          Note: In a real application, this would be replaced with a proper authentication system.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
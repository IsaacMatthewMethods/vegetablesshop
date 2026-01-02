
import React, { useEffect, useState } from 'react';
import { User } from '../../types';
import { useAppContext } from '../../context/AppContext';

const UsersTable: React.FC = () => {
  const { token } = useAppContext();
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      if (token) {
        try {
          const response = await fetch('/api/users', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) {
            const data = await response.json();
            setAllUsers(data);
          }
        } catch (error) {
          console.error('Error fetching all users:', error);
        }
      }
    };
    fetchAllUsers();
  }, [token]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Joined</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map(user => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{new Date(user.created_at || '').toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

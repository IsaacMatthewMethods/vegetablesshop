
import React from 'react';
import UsersTable from '../../src/components/admin/UsersTable';

const UsersPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
      <UsersTable />
    </div>
  );
};

export default UsersPage;

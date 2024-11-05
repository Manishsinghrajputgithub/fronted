// src/layouts/AdminLayout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen fixed">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

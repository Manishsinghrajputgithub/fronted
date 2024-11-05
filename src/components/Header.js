import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Header = ({ onLogout, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <button
        onClick={onToggleSidebar}
        className="p-2 text-gray-800 hover:text-gray-600 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition-all duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;

// src/components/Dashboard.js
import React from 'react';




const Dashboard = () => {
  // Sample data for each metric (you can replace these with actual data from a backend)
  const metrics = [
    { value: "0", label: "Total Users" },
    { value: "0 ₹", label: "Today Bid Amount" },
    { value: "0 ₹", label: "Today Winning Amount" },
    { value: "0₹", label: "Total Bid Amount" },
    { value: "0 ₹", label: "Total Winning Amount" },
    { value: "0 ₹", label: "Total Profit" },
    { value: "0 ₹", label: "Wallet Amount" },
    { value: "0 ₹", label: "Today Amount Paid" },
    { value: "0", label: "Logged in Users" },
    { value: "0", label: "Total Zero Balance Users" },
    { value: "0", label: "Today Zero Balance Users" },
    { value: "0", label: "Banned Users" },
    { value: "0 ₹", label: "Today Total Deposits" },
    { value: "0 ₹", label: "Today Total Withdraw" },
    { value: "0", label: "Today Register With Balance" },
    { value: "0", label: "Today Register With Zero Balance" },
    { value: "0 ₹", label: "Today Manual Deposits" },
    { value: "0 ₹", label: "Today Manual Withdraw" },
    { value: "0", label: "Today Registered User" },
    { value: "0", label: "Yesterday Registered Users" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800">{metric.value}</p>
            <p className="text-gray-600">{metric.label}</p>
            <button className="mt-4 bg-gray-800 text-white text-sm font-medium py-1 px-3 rounded hover:bg-gray-700">
              More info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

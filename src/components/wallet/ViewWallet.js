import React from 'react';

const ViewWallet = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">View Wallet</h2>
      
      <div className="bg-white p-4 shadow-md rounded-md mb-6">
        <label className="block text-gray-700 mb-2">Search with Username, Mobile number, Wallet Balance</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Keyword"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Search</button>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>Sort by Registration</option>
            <option>Sort by Balance</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">#</th>
              <th className="px-4 py-2 text-left border">UserName</th>
              <th className="px-4 py-2 text-left border">Mobile</th>
              <th className="px-4 py-2 text-left border">Balance</th>
              <th className="px-4 py-2 text-left border">Last Update</th>
              <th className="px-4 py-2 text-center border">C/D History</th>
              <th className="px-4 py-2 text-center border">History</th>
              <th className="px-4 py-2 text-center border">Profile</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            {[...Array(7)].map((_, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">User {i + 1}</td>
                <td className="px-4 py-2 border">123456789{i}</td>
                <td className="px-4 py-2 border">{10 - i}</td>
                <td className="px-4 py-2 border">02-11-2024 06:53 PM</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600">↩️</button>
                  <button className="bg-gray-500 text-white px-2 py-1 rounded ml-2 hover:bg-gray-600">PG</button>
                </td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">↩️</button>
                </td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">👤</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewWallet;

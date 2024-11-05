import React from 'react';

const EditWallet = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Edit Wallet</h2>
      
      {/* Search Section */}
      <div className="bg-white p-4 shadow-md rounded-md mb-6">
        <label className="block text-gray-700 mb-2">
          Search with Username, Mobile number, Wallet Balance
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Keyword"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
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

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">#</th>
              <th className="px-4 py-2 text-left border">UserName</th>
              <th className="px-4 py-2 text-left border">Mobile</th>
              <th className="px-4 py-2 text-left border">Balance</th>
              <th className="px-4 py-2 text-left border">Edit</th>
              <th className="px-4 py-2 text-left border">Withdraw Limit</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic data as needed */}
            {[...Array(7)].map((_, i) => (
              <tr key={i} className={`hover:bg-gray-50 ${i % 2 === 0 ? 'bg-gray-50' : ''}`}>
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">User {i + 1}</td>
                <td className="px-4 py-2 border">987654321{i}</td>
                <td className="px-4 py-2 border">{10 - i}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l-3 3m0 0l3 3m-3-3h12.757a2 2 0 001.414-3.414L13.414 3.414A2 2 0 0012 3H4a2 2 0 00-2 2v8z" />
                    </svg>
                  </button>
                </td>
                <td className="px-4 py-2 border text-center">
                  Rs. 0{' '}
                  <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l-3 3m0 0l3 3m-3-3h12.757a2 2 0 001.414-3.414L13.414 3.414A2 2 0 0012 3H4a2 2 0 00-2 2v8z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditWallet;

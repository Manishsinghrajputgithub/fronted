import React from 'react';

const BidHistory = () => {
  return (
    <div className="p-6">
      {/* Filters Section */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="2024-11-02"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Game Name</label>
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option>Select Game</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Game Type</label>
            <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
              <option>Select Game Type</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
        </div>
      </div>

      {/* Bid History Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Bid History</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Export to PDF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-3 text-gray-600 font-semibold">#</th>
                <th className="text-left p-3 text-gray-600 font-semibold">User Name</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Mobile Number</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Bid TXID</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Game Name</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Game Type</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Session</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Number</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Points</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Date and Time</th>
                <th className="text-left p-3 text-gray-600 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows here dynamically based on data */}
              <tr className="border-b">
                <td className="p-3 text-gray-700">1</td>
                <td className="p-3 text-gray-700">John Doe</td>
                <td className="p-3 text-gray-700">1234567890</td>
                <td className="p-3 text-gray-700">TX123456</td>
                <td className="p-3 text-gray-700">Game A</td>
                <td className="p-3 text-gray-700">Type 1</td>
                <td className="p-3 text-gray-700">Morning</td>
                <td className="p-3 text-gray-700">5</td>
                <td className="p-3 text-gray-700">100</td>
                <td className="p-3 text-gray-700">2024-11-02 12:00</td>
                <td className="p-3 text-gray-700">Edit</td>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidHistory;

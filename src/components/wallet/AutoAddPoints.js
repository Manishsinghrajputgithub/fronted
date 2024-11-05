import React from 'react';

const AutoAddPoints = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Add Points (Auto)</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4">
          Add Points (Auto)
        </button>
        
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-2">
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">Copy</button>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">CSV</button>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">Excel</button>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">PDF</button>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">Print</button>
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md">Column visibility</button>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-1"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">#</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">User Name</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">User Mobile</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Payment ID</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Points</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows; map data here in actual implementation */}
              <tr>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">1</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">Seen</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">1234567890</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">4TXb/KmHiZi8...</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">500</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">11:22 AM 28-09-2024</td>
              </tr>
              {/* Additional rows go here */}
            </tbody>
          </table>
          
          <div className="flex items-center justify-between mt-4 text-gray-500">
            <p className="text-sm">Showing 1 to 7 of 7 entries</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded text-gray-700">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 bg-gray-300 rounded text-gray-700">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoAddPoints;

import React from 'react';

const DepositPointsRequest = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Deposit Points Request</h2>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md mb-4">
          Deposit Points
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  #
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  Mobile
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  Amount
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  Created at
                </th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-2 border border-gray-200 text-center text-gray-500"
                >
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4 text-gray-500">
            <p className="text-sm">
              Showing 0 to 0 of 0 entries
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded text-gray-700">Previous</button>
              <button className="px-3 py-1 bg-gray-300 rounded text-gray-700">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPointsRequest;

// src/components/SystemReports/WithdrawTransaction.js
import React, { useState } from 'react';

const WithdrawTransaction = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <div className="p-6 font-sans">
      <h2 className="text-2xl font-semibold mb-4">Withdraw Transactions</h2>

      {/* Filters Section */}
      <div className="flex items-center gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <button className="mt-6 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
          Save
        </button>
      </div>

      {/* Withdrawal Count */}
      <div className="flex justify-center items-center mb-6">
        <div className="bg-yellow-400 text-black font-bold text-3xl py-6 px-12 rounded text-center">
          0
          <p className="text-lg font-medium">WITHDRAWAL</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-gray-300 rounded p-4">
        <div className="flex gap-2 mb-4">
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">Copy</button>
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">CSV</button>
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">Excel</button>
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">PDF</button>
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">Print</button>
          <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300">
            Column visibility
          </button>
        </div>

        <table className="w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-200">#</th>
              <th className="p-2 border border-gray-200">User Name</th>
              <th className="p-2 border border-gray-200">User Mobile</th>
              <th className="p-2 border border-gray-200">Remark</th>
              <th className="p-2 border border-gray-200">Amount</th>
              <th className="p-2 border border-gray-200">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>Showing 0 to 0 of 0 entries</span>
          <div>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawTransaction;

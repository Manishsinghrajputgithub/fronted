// src/components/BookieCorner/BetFilter.js
import React, { useState } from 'react';

const BetFilter = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [game, setGame] = useState('');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Bet Report</h2>

      {/* Filter Section */}
      <div className="bg-white shadow rounded p-4 mb-4">
        <h3 className="text-lg font-medium mb-3">Filters</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Date Input */}
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block font-medium mb-1">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>

          {/* Game Dropdown */}
          <div>
            <label className="block font-medium mb-1">Game</label>
            <select
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="">Select Game</option>
              <option value="game1">Game 1</option>
              <option value="game2">Game 2</option>
              <option value="game3">Game 3</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <div className="mb-2">
          <button className="border border-gray-300 px-3 py-1 text-sm rounded mr-2">Copy</button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded mr-2">CSV</button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded mr-2">Excel</button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded mr-2">PDF</button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded mr-2">Print</button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded">Column visibility</button>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">User Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Points</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Game Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Number</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-center" colSpan="6">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm">Showing 0 to 0 of 0 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetFilter;

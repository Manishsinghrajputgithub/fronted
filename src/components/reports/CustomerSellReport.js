// src/components/BookieCorner/CustomerSellReport.js
import React, { useState } from 'react';

const CustomerSellReport = () => {
  const [date, setDate] = useState('');
  const [game, setGame] = useState('');
  const [session, setSession] = useState('');
  const [gameType, setGameType] = useState('');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Sell Report</h2>

      {/* Filter Section */}
      <div className="bg-white shadow rounded p-4 mb-4">
        <h3 className="text-lg font-medium mb-3">Filters</h3>
        <div className="grid grid-cols-4 gap-4">
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

          {/* Session Dropdown */}
          <div>
            <label className="block font-medium mb-1">Session</label>
            <select
              value={session}
              onChange={(e) => setSession(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="">Select Session</option>
              <option value="session1">Session 1</option>
              <option value="session2">Session 2</option>
            </select>
          </div>

          {/* Game Type Dropdown */}
          <div>
            <label className="block font-medium mb-1">Game Type</label>
            <select
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            >
              <option value="">Select Game Type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CustomerSellReport;

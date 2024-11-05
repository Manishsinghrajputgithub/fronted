// src/components/BookieCorner/CuttingGroup.js
import React from 'react';

const CuttingGroup = () => {
  return (
    <div className="p-6 pt-20 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">OC Cutting Group</h1>

      {/* Filters Section */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Date Input */}
          <div className="flex flex-col">
            <label htmlFor="date" className="font-semibold mb-2">Date</label>
            <input
              type="date"
              id="date"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue="2024-11-01"
            />
          </div>

          {/* Game Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="game" className="font-semibold mb-2">Game</label>
            <select
              id="game"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Game</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Session Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="session" className="font-semibold mb-2">Session</label>
            <select
              id="session"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Session</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CuttingGroup;

import React from 'react';

const CuttingGroup = () => {
  return (
    <div className="p-6 pt-20">
      <h2 className="text-3xl font-semibold mb-4">Cutting Group</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Filters</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input type="date" className="w-full border border-gray-300 p-2 rounded" defaultValue="2024-11-01" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Game</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Game</option>
              {/* Add game options here */}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Session</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Session</option>
              {/* Add session options here */}
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CuttingGroup;

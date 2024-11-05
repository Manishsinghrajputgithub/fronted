import React from 'react';

const BidRevert = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Bid Revert</h2>

      {/* Filter Container */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <span className="text-lg font-medium">Filters</span>
          <div className="flex space-x-2 text-gray-400 cursor-pointer">
            <span className="hover:text-gray-600">−</span>
            <span className="hover:text-gray-600">×</span>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Date Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              defaultValue="2024-11-04"
            />
          </div>

          {/* Game Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Game</label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select Game</option>
              {/* Add more game options as needed */}
            </select>
          </div>

          {/* User Mobile Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">User Mobile</label>
            <input
              type="text"
              placeholder="Enter User Mobile"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </form>

        {/* Save Button */}
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>

      {/* Clear & Refund Button */}
      <div className="text-center">
        <button
          className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600"
        >
          Clear & Refund All
        </button>
      </div>

      {/* Additional content placeholder */}
      <div className="mt-4 border rounded p-4 bg-white"></div>
    </div>
  );
};

export default BidRevert;

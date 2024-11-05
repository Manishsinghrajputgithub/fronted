import React from 'react';

const SinglePana = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Single Pana</h2>

      {/* Add Pana Container */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h3 className="text-lg font-medium mb-4">Add Pana</h3>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Single Ank Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Single Ank</label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>--Select Single Ank--</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Single Pana Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Single Pana</label>
            <input
              type="number"
              placeholder="Enter Single Pana"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Add Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePana;

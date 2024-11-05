import React from 'react';

const AddPoint = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-6">Add Points (User Wallet)</h2>

      {/* Form Container */}
      <div className="bg-white p-6 rounded shadow-md">
        {/* Form */}
        <form>
          {/* User Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Users</label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Select User</option>
              {/* Add dynamic options for users */}
            </select>
          </div>

          {/* Points Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Points</label>
            <input
              type="number"
              placeholder="Enter Points"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPoint;

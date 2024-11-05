// src/components/GameManagement/GameRates.js
import React from 'react';

const GameRates = () => {
  return (
    <div className="p-6 pt-20 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg shadow-lg">
        Game Rates
      </h2>

      <div className="space-y-6 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
        {/* Single Digit */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Single Digit</h3>
          <label className="text-sm font-medium text-gray-500">Value:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out"
            defaultValue={93}
          />
        </div>
         
        {/* Jodi Digit */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Jodi Digit</h3>
          <label className="text-sm font-medium text-gray-500">Value:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out"
            defaultValue={1000}
          />
        </div>

        {/* Single Pana */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Single Pana</h3>
          <label className="text-sm font-medium text-gray-500">Value:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out"
            defaultValue={1200}
          />
        </div>

        {/* Double Pana */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Double Pana</h3>
          <label className="text-sm font-medium text-gray-500">Value:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out"
            defaultValue={1500}
          />
        </div>

        {/* Triple Pana */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Triple Pana</h3>
          <label className="text-sm font-medium text-gray-500">Value:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out"
            defaultValue={3000}
          />
        </div>
      </div>
    </div>
  );
};

export default GameRates;

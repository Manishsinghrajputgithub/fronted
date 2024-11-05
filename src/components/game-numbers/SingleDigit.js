import React from 'react';

const SingleDigit = () => {
  const digits = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Single Digits</h2>

      {/* Single Digit Number Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-gray-700 font-medium mb-4">Single Digit Number</h3>
        <div className="flex gap-4 overflow-x-auto">
          {digits.map((digit) => (
            <div
              key={digit}
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold text-lg rounded-md"
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleDigit;

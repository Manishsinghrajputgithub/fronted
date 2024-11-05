import React from 'react';

const JodiDigit = () => {
  // Generate Jodi digits from 00 to 99
  const jodiDigits = Array.from({ length: 100 }, (_, i) =>
    i.toString().padStart(2, '0')
  );

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Jodi Digits</h2>

      {/* Jodi Digit Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-gray-700 font-medium mb-4">Jodi Digit Number</h3>
        <div className="grid grid-cols-10 gap-4">
          {jodiDigits.map((digit) => (
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

export default JodiDigit;

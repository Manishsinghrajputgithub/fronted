import React from 'react';

const ResultHistory = () => {
  const data = [
    { id: 1, gameName: 'KALYAN MORNING', openPana: '469-9', closePana: '247-3' },
    { id: 2, gameName: 'SRIDEVI MORNING', openPana: '688-2', closePana: '290-1' },
    { id: 3, gameName: 'KARNATAKA DAY', openPana: '366-5', closePana: '190-0' },
    { id: 4, gameName: 'MILAN MORNING', openPana: '356-4', closePana: '367-6' },
    { id: 5, gameName: 'SRIDEVI', openPana: '134-8', closePana: '347-4' },
    { id: 6, gameName: 'SUPREME DAY', openPana: '379-9', closePana: '779-3' },
  ];

  return (
    <div className="p-6 pt-20">
      <h2 className="text-3xl font-semibold mb-4">Result History</h2>
      <div className="flex items-center mb-4">
        <input type="date" className="border p-2 rounded mr-2" defaultValue="2024-11-01" />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Copy Data</button>
      </div>
      <table className="w-full text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Game Name</th>
            <th className="border px-4 py-2">Open Pana</th>
            <th className="border px-4 py-2">Close Pana</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{row.id}</td>
              <td className="border px-4 py-2">{row.gameName}</td>
              <td className="border px-4 py-2">{row.openPana}</td>
              <td className="border px-4 py-2">{row.closePana}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultHistory;

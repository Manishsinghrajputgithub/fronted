// src/components/BookieCorner/WinningDetails.js
import React from 'react';

const WinningDetails = () => {
  const data = [
    { id: 1, userName: 'raju12', bidPoints: 10, winningPoints: 93, marketName: 'KALYAN_OPEN', gameName: 'single', bidNumber: 1, date: '12:36 PM 31-10-2024' },
    { id: 2, userName: 'raju12', bidPoints: 20, winningPoints: 186, marketName: 'Sara_night__OPEN', gameName: 'single', bidNumber: 1, date: '06:21 PM 27-10-2024' },
    { id: 3, userName: 'raju12', bidPoints: 200, winningPoints: 1860, marketName: 'Sara_night__OPEN', gameName: 'single', bidNumber: 1, date: '06:21 PM 27-10-2024' },
    { id: 4, userName: 'raju12', bidPoints: 10, winningPoints: 93, marketName: 'Sara_night__OPEN', gameName: 'single', bidNumber: 1, date: '06:21 PM 27-10-2024' },
    { id: 5, userName: 'raju12', bidPoints: 200, winningPoints: 24000, marketName: 'KALYAN_OPEN', gameName: 'singlepatti', bidNumber: 346, date: '04:44 PM 22-10-2024' },
    { id: 6, userName: 'mahakal', bidPoints: 50, winningPoints: 6000, marketName: 'RAJDHANI_DAY_OPEN', gameName: 'singlepatti', bidNumber: 567, date: '02:34 PM 17-10-2024' },
    { id: 7, userName: 'Shubham Athawale', bidPoints: 6, winningPoints: 60, marketName: 'SRIDEVI_NIGHT_CLOSE', gameName: 'single', bidNumber: 2, date: '08:46 PM 05-10-2024' },
    { id: 8, userName: '', bidPoints: 1000, winningPoints: 10000, marketName: 'SRIDEVI_CLOSE', gameName: 'single', bidNumber: 7, date: '12:55 PM 09-09-2024' },
    { id: 9, userName: '', bidPoints: 1000, winningPoints: 9500, marketName: 'SUPREME_DAY_OPEN', gameName: 'single', bidNumber: 0, date: '03:55 PM 13-08-2024' },
    { id: 10, userName: '', bidPoints: 25, winningPoints: 238, marketName: 'MILAN_NIGHT_OPEN', gameName: 'single', bidNumber: 1, date: '09:20 PM 08-08-2024' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Winning History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b border-gray-300 text-left">#</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">User Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Bid Points</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Winning Points</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Market Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Game Name</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Bid number</th>
              <th className="px-4 py-2 border-b border-gray-300 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-300">{row.id}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.userName}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.bidPoints}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.winningPoints}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.marketName}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.gameName}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.bidNumber}</td>
                <td className="px-4 py-2 border-b border-gray-300">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-200">1</span>
          <span className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-200">2</span>
          <span className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-200">3</span>
          <span className="px-3 py-1 border border-gray-300">...</span>
          <span className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-200">6</span>
          <span className="px-3 py-1 border border-gray-300 cursor-pointer hover:bg-gray-200">Next</span>
        </div>
      </div>
    </div>
  );
};

export default WinningDetails;

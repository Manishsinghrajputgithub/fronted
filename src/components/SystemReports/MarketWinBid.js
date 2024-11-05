import React from 'react';

const MarketWinBid = () => {
  // Sample data to display in the table
  const marketData = [
    { id: 1, name: 'DFG', totalBidding: 0, totalWinning: 0 },
    { id: 2, name: 'KALYAN MORNING', totalBidding: 0, totalWinning: 0 },
    { id: 3, name: 'SRIDEVI MORNING', totalBidding: 0, totalWinning: 0 },
    { id: 4, name: 'MILAN MORNING', totalBidding: 0, totalWinning: 0 },
    { id: 5, name: 'KARNATAKA DAY', totalBidding: 0, totalWinning: 0 },
    { id: 6, name: 'KALYAN', totalBidding: 0, totalWinning: 0 },
    { id: 7, name: 'SRIDEVI', totalBidding: 0, totalWinning: 0 },
    { id: 8, name: 'TIME BAZAR', totalBidding: 0, totalWinning: 0 },
    { id: 9, name: 'MADHUR DAY', totalBidding: 0, totalWinning: 0 },
    { id: 10, name: 'mks', totalBidding: 0, totalWinning: 0 },
    { id: 11, name: 'BHOOTNATH DAY', totalBidding: 0, totalWinning: 0 },
    { id: 12, name: 'SARA', totalBidding: 0, totalWinning: 0 },
    { id: 13, name: 'RAJDHANI DAY', totalBidding: 0, totalWinning: 0 },
    { id: 14, name: 'MILAN DAY', totalBidding: 0, totalWinning: 0 },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">Market Winning/Bidding Transactions</h2>

      {/* Filter Section */}
      <div className="bg-white shadow rounded-md p-4 mb-6">
        <h3 className="text-lg font-medium mb-2">Filters</h3>
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col">
            <label htmlFor="fromDate" className="mb-1 font-medium">From Date</label>
            <input
              type="date"
              id="fromDate"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
              defaultValue="2024-11-01"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="toDate" className="mb-1 font-medium">To Date</label>
            <input
              type="date"
              id="toDate"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
              defaultValue="2024-11-01"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Save</button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex justify-between space-x-4 mb-6">
        {/* Total Bidding */}
        <div className="flex-1 bg-white shadow rounded-md p-4 text-center">
          <h3 className="text-4xl font-bold text-gray-700">0</h3>
          <p className="text-lg font-medium text-gray-500">Total Bidding</p>
        </div>
        {/* Total Winning */}
        <div className="flex-1 bg-yellow-400 shadow rounded-md p-4 text-center">
          <h3 className="text-4xl font-bold text-gray-800">0</h3>
          <p className="text-lg font-medium text-white">Total Winning</p>
        </div>
        {/* Total Profit */}
        <div className="flex-1 bg-green-500 shadow rounded-md p-4 text-center">
          <h3 className="text-4xl font-bold text-white">0</h3>
          <p className="text-lg font-medium text-white">Total Profit</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow rounded-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Market Name</th>
              <th className="p-3 border-b">Total Bidding</th>
              <th className="p-3 border-b">Total Winning</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((market, index) => (
              <tr key={market.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="p-3 border-b">{index + 1}</td>
                <td className="p-3 border-b">{market.name}</td>
                <td className="p-3 border-b">{market.totalBidding}</td>
                <td className="p-3 border-b">{market.totalWinning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketWinBid;

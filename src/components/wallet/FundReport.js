import React from 'react';

const FundReport = () => {
  const transactions = [
    {
      id: 1,
      previousAmount: 116391,
      transactionAmount: 10,
      currentAmount: 116381,
      description: 'Bid ( 05:30 : jodi : 81 )',
      date: '12:41 PM 31-10-2024',
      status: 'Success',
      addedBy: 'Auto',
    },
    {
      id: 2,
      previousAmount: 116447,
      transactionAmount: 56,
      currentAmount: 116391,
      description: 'Bid ( 05:30 : jodi : 82 )',
      date: '12:39 PM 31-10-2024',
      status: 'Success',
      addedBy: 'Auto',
    },
    // Add more transaction data as needed
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Fund Report</h2>
        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">From Date</label>
            <input
              type="date"
              className="mt-1 p-2 border rounded w-full"
              defaultValue="2024-11-03"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">To Date</label>
            <input
              type="date"
              className="mt-1 p-2 border rounded w-full"
              defaultValue="2024-11-03"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Select Credit/Debit</label>
            <select className="mt-1 p-2 border rounded w-full">
              <option>All</option>
              <option>Credit</option>
              <option>Debit</option>
            </select>
          </div>
          <button className="self-end bg-blue-500 text-white py-2 px-4 rounded">
            SAVE
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Previous Amount</th>
                <th className="px-4 py-2 border">Transaction Amount</th>
                <th className="px-4 py-2 border">Current Amount</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Added by</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t">
                  <td className="px-4 py-2 border">{transaction.id}</td>
                  <td className="px-4 py-2 border">{transaction.previousAmount}</td>
                  <td className="px-4 py-2 border">{transaction.transactionAmount}</td>
                  <td className="px-4 py-2 border">{transaction.currentAmount}</td>
                  <td className="px-4 py-2 border">{transaction.description}</td>
                  <td className="px-4 py-2 border">{transaction.date}</td>
                  <td className="px-4 py-2 border">{transaction.status}</td>
                  <td className="px-4 py-2 border">{transaction.addedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FundReport;

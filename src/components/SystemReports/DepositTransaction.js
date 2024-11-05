import React, { useState } from 'react';

const DepositTransaction = () => {
  const depositData = [
    { id: 1, userName: 'John Doe', userMobile: '123-456-7890', remark: 'First deposit', amount: 100, type: 'Bank Transfer', time: '10:30 AM' },
    { id: 2, userName: 'Jane Smith', userMobile: '098-765-4321', remark: 'Second deposit', amount: 200, type: 'Online Payment', time: '11:45 AM' },
    { id: 3, userName: 'Bob Johnson', userMobile: '555-123-4567', remark: 'Third deposit', amount: 150, type: 'Cash Deposit', time: '01:15 PM' },
  ];

  const [search, setSearch] = useState('');

  // Function to copy table data to the clipboard
  const handleCopy = () => {
    const tableText = depositData
      .map(deposit => `${deposit.userName}\t${deposit.userMobile}\t${deposit.remark}\t${deposit.amount}\t${deposit.type}\t${deposit.time}`)
      .join('\n');
    navigator.clipboard.writeText(tableText).then(() => {
      alert('Data copied to clipboard!');
    });
  };

  // Function to download data as CSV
  const handleExportCSV = () => {
    const csvContent = `data:text/csv;charset=utf-8,${depositData
      .map(deposit => `${deposit.id},${deposit.userName},${deposit.userMobile},${deposit.remark},${deposit.amount},${deposit.type},${deposit.time}`)
      .join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'deposit_transactions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Placeholder functions for export to Excel, PDF, and print
  const handleExportExcel = () => alert('Export to Excel feature is not implemented yet.');
  const handleExportPDF = () => alert('Export to PDF feature is not implemented yet.');
  const handlePrint = () => window.print();

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Deposit Transactions</h2>

      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-2">
          <button className="bg-gray-300 px-2 py-1 rounded" onClick={handleCopy}>Copy</button>
          <button className="bg-gray-300 px-2 py-1 rounded" onClick={handleExportCSV}>CSV</button>
          <button className="bg-gray-300 px-2 py-1 rounded" onClick={handleExportExcel}>Excel</button>
          <button className="bg-gray-300 px-2 py-1 rounded" onClick={handleExportPDF}>PDF</button>
          <button className="bg-gray-300 px-2 py-1 rounded" onClick={handlePrint}>Print</button>
          <button className="bg-gray-300 px-2 py-1 rounded">Column visibility</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        />
      </div>

      <div className="bg-white shadow rounded-md p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">User Name</th>
              <th className="p-3 border-b">User Mobile</th>
              <th className="p-3 border-b">Remark</th>
              <th className="p-3 border-b">Amount</th>
              <th className="p-3 border-b">Type</th>
              <th className="p-3 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {depositData
              .filter((item) =>
                item.userName.toLowerCase().includes(search.toLowerCase()) ||
                item.userMobile.toLowerCase().includes(search.toLowerCase()) ||
                item.remark.toLowerCase().includes(search.toLowerCase()) ||
                item.type.toLowerCase().includes(search.toLowerCase())
              )
              .map((deposit, index) => (
                <tr key={deposit.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="p-3 border-b">{index + 1}</td>
                  <td className="p-3 border-b">{deposit.userName}</td>
                  <td className="p-3 border-b">{deposit.userMobile}</td>
                  <td className="p-3 border-b">{deposit.remark}</td>
                  <td className="p-3 border-b">{deposit.amount}</td>
                  <td className="p-3 border-b">{deposit.type}</td>
                  <td className="p-3 border-b">{deposit.time}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-gray-300 px-2 py-1 rounded">Previous</button>
          <span>Showing 1 to {depositData.length} of {depositData.length} entries</span>
          <button className="bg-gray-300 px-2 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DepositTransaction;

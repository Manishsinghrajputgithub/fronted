// src/components/GameManagement/GameResult.js
import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const GameResult = () => {
  const tableData = [
    { id: 1, gameName: 'Game 1', resultDate: '01/11/2024', openPana: '123-1', closePana: '456-1' },
    // Additional rows...
  ];

  const handleCopy = () => {
    const text = tableData.map(row => Object.values(row).join('\t')).join('\n');
    navigator.clipboard.writeText(text);
    alert('Data copied to clipboard');
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['#', 'Game Name', 'Result Date', 'Open Pana', 'Close Pana'],
      ...tableData.map(row => [row.id, row.gameName, row.resultDate, row.openPana, row.closePana])
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'game_results.csv');
  };

  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Results');
    XLSX.writeFile(workbook, 'game_results.xlsx');
  };

  const handlePrint = () => {
    const printContent = document.getElementById('resultsTable').outerHTML;
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write('<html><head><title>Print Table</title></head><body>');
    newWindow.document.write(printContent);
    newWindow.document.write('</body></html>');
    newWindow.print();
    newWindow.close();
  };

  return (
    <div className="p-6 pt-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Declare Result</h2>

      {/* Results Table Section */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
        {/* Export and Search Options */}
        <div className="flex items-center justify-between mb-4">
          <div className="space-x-2">
            <button onClick={handleCopy} className="bg-gray-200 px-3 py-1 rounded-md text-sm">Copy</button>
            <button onClick={handleExportCSV} className="bg-gray-200 px-3 py-1 rounded-md text-sm">CSV</button>
            <button onClick={handleExportExcel} className="bg-gray-200 px-3 py-1 rounded-md text-sm">Excel</button>
            <button onClick={handlePrint} className="bg-gray-200 px-3 py-1 rounded-md text-sm">Print</button>
            {/* Add custom logic for 'PDF' and 'Column visibility' if needed */}
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Table */}
        <div id="resultsTable" className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">#</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">Game Name</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">Result Date</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">Open Pana</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">Close Pana</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">{row.id}</td>
                  <td className="p-3 text-sm text-gray-700">{row.gameName}</td>
                  <td className="p-3 text-sm text-gray-700">{row.resultDate}</td>
                  <td className="p-3 text-sm text-gray-700">{row.openPana}</td>
                  <td className="p-3 text-sm text-gray-700">{row.closePana}</td>
                  <td className="p-3 text-sm">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">Showing 1 to 6 of 6 entries</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-600">Previous</button>
            <button className="px-3 py-1 rounded-md bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

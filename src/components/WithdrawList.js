// src/components/WithdrawList.js
import React, { useState } from 'react';

// Sample data for withdrawal requests
const withdrawRequests = [
  {
    id: 1,
    username: 'raju12',
    mobile: '8824108152',
    points: 1000,
    requestNo: 11,
    date: '03:14 PM 30-10-2024',
    fundID: 'ZnVuZDE=',
    paytm: '8541039703',
    gpay: '8541039703',
    phonepe: '+918541039703',
    acNo: '',
    bankName: '',
    ifsc: '',
    upiID: '',
    acHolderName: '',
    branchName: '',
    status: 'Pending',
  },
  // Additional sample entries...
];

const WithdrawList = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to handle viewing details
  const handleViewClick = (request) => {
    setSelectedRequest(request);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  // Function to handle action buttons
  const handleAction = (action) => {
    // Here you would handle the approve/reject actions (e.g., update the status, call an API, etc.)
    console.log(`${action} action taken on request ID ${selectedRequest.requestNo}`);
    handleCloseModal(); // Close modal after action
  };

  return (
    <div className="p-6 font-sans ">
      <h2 className="text-2xl font-semibold mb-2">Withdraw Points Request</h2>
      <p className="text-sm text-gray-600 mb-4">Search with Mobile number, Amount</p>
      
      {/* Search Section */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Keyword"
          className="border border-gray-300 rounded p-2 w-1/2 mr-2"
        />
        <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Withdraw Points Button */}
      <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded mb-4 hover:bg-blue-600">
        Withdraw Points
      </button>

      {/* Table Section */}
      <div className="overflow-x-auto border border-gray-300 rounded">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-200">#</th>
              <th className="p-2 border border-gray-200">User Name</th>
              <th className="p-2 border border-gray-200">User Mobile</th>
              <th className="p-2 border border-gray-200">Points</th>
              <th className="p-2 border border-gray-200">Request No.</th>
              <th className="p-2 border border-gray-200">Date</th>
              <th className="p-2 border border-gray-200">Status</th>
              <th className="p-2 border border-gray-200">View</th>
            </tr>
          </thead>
          <tbody>
            {withdrawRequests.map((request, index) => (
              <tr key={request.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-2 border border-gray-200">{request.id}</td>
                <td className="p-2 border border-gray-200 text-blue-600">{request.username}</td>
                <td className="p-2 border border-gray-200">{request.mobile}</td>
                <td className="p-2 border border-gray-200">{request.points}</td>
                <td className="p-2 border border-gray-200">{request.requestNo}</td>
                <td className="p-2 border border-gray-200">{request.date}</td>
                <td className="p-2 border border-gray-200">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      request.status === 'Pending' ? 'bg-yellow-400 text-black' :
                      request.status === 'Accepted' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="p-2 border border-gray-200 text-blue-600 cursor-pointer">
                  <button onClick={() => handleViewClick(request)}>👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Withdraw Request Details</h3>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-semibold py-1">User Name</td>
                  <td>{selectedRequest.username}</td>
                  <td className="font-semibold py-1">Request Points</td>
                  <td>{selectedRequest.points}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">Request Number</td>
                  <td>#{selectedRequest.requestNo}</td>
                  <td className="font-semibold py-1">Fund ID</td>
                  <td>{selectedRequest.fundID}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">A/C no</td>
                  <td>{selectedRequest.acNo}</td>
                  <td className="font-semibold py-1">A/C Holder Name</td>
                  <td>{selectedRequest.acHolderName}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">Bank Name</td>
                  <td>{selectedRequest.bankName}</td>
                  <td className="font-semibold py-1">Branch Name</td>
                  <td>{selectedRequest.branchName}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">IFSC</td>
                  <td>{selectedRequest.ifsc}</td>
                  <td className="font-semibold py-1">Phonepe</td>
                  <td>{selectedRequest.phonepe}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">Paytm</td>
                  <td>{selectedRequest.paytm}</td>
                  <td className="font-semibold py-1">Gpay</td>
                  <td>{selectedRequest.gpay}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-1">UPI ID</td>
                  <td>{selectedRequest.upiID}</td>
                  <td className="font-semibold py-1">Request Date</td>
                  <td>{selectedRequest.date}</td>
                </tr>
              </tbody>
            </table>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => handleAction('Approve')}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction('Reject')}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => handleAction('On Hold')}
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                On Hold
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawList;

import React from 'react';

const DepositRequest = () => {
  const requests = [
    {
      id: 1,
      userName: 'Seen',
      userMobile: '1234567890',
      points: 200,
      transactionId: '1234567898',
      screenshot: 'screenshot1.png',
      note: 'Abcd',
      date: '02:09 PM 20-09-2024',
      status: 'Rejected',
      action: 'Action taken',
    },
    {
      id: 2,
      userName: 'Seen',
      userMobile: '1234567890',
      points: 500,
      transactionId: '123456789009',
      screenshot: 'screenshot2.png',
      note: '',
      date: '10:08 AM 31-05-2024',
      status: 'Accepted',
      action: 'Action taken',
    },
    {
      id: 3,
      userName: 'Seen',
      userMobile: '1234567890',
      points: 500,
      transactionId: '56665443',
      screenshot: 'screenshot3.png',
      note: '',
      date: '06:19 PM 29-05-2024',
      status: 'Accepted',
      action: 'Action taken',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">Deposit Points Request</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Search with Mobile number, Amount</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Keyword"
              className="p-2 border border-gray-300 rounded-l w-full"
            />
            <button className="bg-blue-500 text-white px-4 rounded-r">
              Search
            </button>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
          Deposit Points
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">User Name</th>
                <th className="px-4 py-2 border">User Mobile</th>
                <th className="px-4 py-2 border">Points</th>
                <th className="px-4 py-2 border">Transaction ID</th>
                <th className="px-4 py-2 border">Screenshot</th>
                <th className="px-4 py-2 border">Note</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="px-4 py-2 border">{request.id}</td>
                  <td className="px-4 py-2 border">{request.userName}</td>
                  <td className="px-4 py-2 border">{request.userMobile}</td>
                  <td className="px-4 py-2 border">{request.points}</td>
                  <td className="px-4 py-2 border">{request.transactionId}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={request.screenshot}
                      alt="Screenshot"
                      className="w-6 h-6"
                    />
                  </td>
                  <td className="px-4 py-2 border">{request.note}</td>
                  <td className="px-4 py-2 border">{request.date}</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        request.status === 'Accepted'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">{request.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositRequest;

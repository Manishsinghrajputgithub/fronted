import React from 'react';

const BankDetailsChange = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Bank Details Change Request</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">#</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">User Name</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">User Mobile</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">UPI</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">AC No</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Branch</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">IFSC</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Bank</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">PhonePe</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">PayTM</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">GPay</th>
                <th className="px-4 py-2 border border-gray-200 text-left font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows; replace with dynamic data in actual implementation */}
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 text-gray-700">1</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">Completed</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">2</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">8245153542</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">8245153542</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">8245153542</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">8245153542</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">Completed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 text-gray-700">3</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">7777990010</td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700"></td>
                <td className="px-4 py-2 border border-gray-200 text-gray-700">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsChange;

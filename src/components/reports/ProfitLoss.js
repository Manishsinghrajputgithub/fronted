import React from 'react';
import { useState } from 'react';

const ProfitLoss = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa' }}>
      <h3 style={{ fontWeight: 'bold' }}>Deposit/Withdraw Transactions</h3>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', padding: '20px' }}>
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Filters</h5>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 220px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ flex: '1 1 220px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <button style={{ height: '40px', marginTop: '25px', padding: '0 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Save
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: '1', backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4 style={{ fontWeight: 'bold' }}>0</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Today's Deposit</p>
        </div>
        <div style={{ flex: '1', backgroundColor: '#ffc107', padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4 style={{ fontWeight: 'bold' }}>0</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Withdrawal</p>
        </div>
        <div style={{ flex: '1', backgroundColor: '#28a745', padding: '20px', textAlign: 'center', borderRadius: '8px', border: '1px solid #ddd' }}>
          <h4 style={{ fontWeight: 'bold' }}>0 ₹</h4>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Total Profit</p>
        </div>
      </div>

      <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', padding: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Copy
          </button>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
            CSV
          </button>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Excel
          </button>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}>
            PDF
          </button>
          <button style={{ marginRight: '10px', padding: '5px 15px', backgroundColor: '#17a2b8', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Print
          </button>
          <button style={{ padding: '5px 15px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Column Visibility
          </button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>#</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>User Name</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>User Mobile</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Type</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: '1px solid #ddd', padding: '10px' }} colSpan="5" align="center">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '10px', textAlign: 'right' }}>
          <p style={{ fontSize: '14px' }}>Showing 0 to 0 of 0 entries</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;

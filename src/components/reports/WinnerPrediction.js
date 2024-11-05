import React from 'react';

const WinningPrediction = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa' }}>
      <h3 style={{ fontWeight: 'bold' }}>Winning prediction</h3>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', padding: '20px' }}>
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
          <h5 style={{ fontWeight: 'bold' }}>Filters</h5>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Date</label>
            <input type="date" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }} />
          </div>
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Game</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option>Select Game</option>
            </select>
          </div>
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Session</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option>Select Session</option>
            </select>
          </div>
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Open Pana</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option>Select Pana</option>
            </select>
          </div>
          <div style={{ flex: '1 1 180px' }}>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Close Pana</label>
            <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option>Select Pana</option>
            </select>
          </div>
        </div>
        <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default WinningPrediction;

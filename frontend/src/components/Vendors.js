// frontend/src/components/Vendors.js
import React, { useState } from 'react';
import axios from 'axios';

const Vendors = () => {
  const [vendorId, setVendorId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/vendors', { vendorId, password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Create Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vendor ID:</label>
          <input
            type="text"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Vendor</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Vendors;

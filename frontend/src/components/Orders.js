// frontend/src/components/Orders.js
import React, { useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [file, setFile] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('http://localhost:5000/api/orders/upload', formData);
      setOrders(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // You can add functions here to update, delete, or filter orders

  return (
    <div>
      <h2>Orders</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>

      {orders.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(orders[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                {Object.values(order).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
                <td>
                  {/* Add buttons for edit and delete */}
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;

// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Report from './components/Report';
import Vendors from './components/Vendors';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/report" element={<Report />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

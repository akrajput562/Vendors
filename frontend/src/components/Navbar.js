// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side - Brand */}
        <div className="navbar-brand">
          <Link to="/">Admin Dashboard</Link>
        </div>

        {/* Right side - Navigation links */}
        <ul className="navbar-links">
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/report">Report</Link>
          </li>
          <li>
            <Link to="/vendors">Vendor</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

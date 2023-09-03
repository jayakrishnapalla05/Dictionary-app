// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
    <nav>
        <div><h1>Dictionary App</h1></div>
    <div className="list">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

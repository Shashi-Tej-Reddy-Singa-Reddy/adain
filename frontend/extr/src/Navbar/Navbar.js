// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Login">Login</Link></li>
      <li><Link to="/Signup">Signup</Link></li>
      <li><Link to="/Expenses">Expenses</Link></li>
      <li><Link to="/ExchangeRate">Currency Exchange</Link></li>
      <li><Link to="/Recommendations">AI Recommendations</Link></li>
    </ul>
  </nav>
);

export default Navbar;

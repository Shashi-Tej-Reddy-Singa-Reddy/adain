import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav
    style={{
      padding: '1rem',
      background: 'black', // Changed the background to black
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        gap: '1.5rem',
        margin: 0,
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            textDecoration: 'none',        // No underline
            color: 'white',                // White text color
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'transparent', // No background
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: 'bold',            // Bold text
            boxShadow: 'none',             // No box shadow
            display: 'inline-block',       // Required for the expanding effect
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'all 0.3s ease';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/Login"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: 'bold',
            boxShadow: 'none',
            display: 'inline-block',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'all 0.3s ease';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/Signup"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: 'bold',
            boxShadow: 'none',
            display: 'inline-block',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'all 0.3s ease';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Signup
        </Link>
      </li>
      <li>
        <Link
          to="/Expenses"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: 'bold',
            boxShadow: 'none',
            display: 'inline-block',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'all 0.3s ease';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Expenses
        </Link>
      </li>
      <li>
        <Link
          to="/ExchangeRate"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: 'transparent',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: 'bold',
            boxShadow: 'none',
            display: 'inline-block',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'all 0.3s ease';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Currency Exchange
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ 
    padding: '1rem', 
    background: '#333', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    display: 'flex', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  }}>
    <ul style={{ 
      listStyle: 'none', 
      display: 'flex', 
      gap: '1.5rem', 
      margin: 0 
    }}>
      <li>
        <Link to="/" 
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(12, 152, 219, 0.3)' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.3)';
          }}
          onClick={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.2)';
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link to="/Login"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(52, 152, 219, 0.3)' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.3)';
          }}
          onClick={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.2)';
          }}
        >
          Login
        </Link>
      </li>
      <li>
        <Link to="/Signup"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(52, 152, 219, 0.3)' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.3)';
          }}
          onClick={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.2)';
          }}
        >
          Signup
        </Link>
      </li>
      <li>
        <Link to="/Expenses"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(52, 152, 219, 0.3)' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.3)';
          }}
          onClick={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.2)';
          }}
        >
          Expenses
        </Link>
      </li>
      <li>
        <Link to="/ExchangeRate"
          style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.1rem',
            padding: '0.5rem 1.5rem',
            backgroundColor: '#3498db',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(52, 152, 219, 0.3)' 
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 12px rgba(52, 152, 219, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px rgba(52, 152, 219, 0.3)';
          }}
          onClick={(e) => {
            e.target.style.transform = 'translateY(1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.2)';
          }}
        >
          Currency Exchange
        </Link>
      </li>
      
    </ul>
  </nav>
);

export default Navbar

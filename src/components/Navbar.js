import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          AI CARBON ATLAS
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Our Data</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Join us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
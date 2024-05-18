import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
          <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <a href="/data" className="navbar-link">Our Data</a>
          </li>
          <li className="navbar-item">
            <a href="/join" className="navbar-link">Join us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
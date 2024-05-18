import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AI CARBON ATLAS
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/data" className="navbar-link">Our Data</Link>
          </li>
          <li className="navbar-item">
            <Link to="/join" className="navbar-link">Join us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
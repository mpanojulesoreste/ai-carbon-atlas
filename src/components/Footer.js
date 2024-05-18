// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing accurate and up-to-date information about the carbon footprint of AI tools.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@aicarbonaltas.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 AI Street, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AI Carbon Atlas. All rights reserved. Ida B. Wells Just Data Lab</p>
      </div>
    </footer>
  );
};

export default Footer;
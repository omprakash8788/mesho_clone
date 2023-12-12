import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Our E-commerce Store</li>
            <li>Sell on Amazon Business</li>
            <li>Become an Affiliate</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Rewards Visa Signature Cards</li>
            <li>Amazon.com Store Card</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your E-commerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

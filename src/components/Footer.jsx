// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '20px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h4>About Us</h4>
          <p>
"MLNK is your go-to source for premium soccer jerseys, footballs, and a lot more. Elevate your soccer experience with our authentic gear, combining quality and style. Explore the best in the game at MLNK."</p>
        </div>

        <div style={{ flex: 1, marginRight: '20px' }}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About Us</Link></li>
            <li><Link to="/products" style={linkStyle}>Products</Link></li>
            {/* Lägg till fler länkar efter behov */}
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <h4>Contact</h4>
          <p>Email: info@MLNK.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} MLNK </p>
      </div>
    </footer>
  );
}

export default Footer;

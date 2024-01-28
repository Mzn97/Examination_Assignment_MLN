// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  width: '100%',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
};

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', 
};

const contentStyle = {
  flex: 1,
};

const Footer = () => {
  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        {/* Huvudinnehåll, till exempel din Navbar och sidoinnehåll */}
      </div>

      <footer style={footerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '200px' }}>
            <h4>About Us</h4>
            <p>
              "MLNK is your go-to source for premium soccer jerseys, footballs, and a lot more. Elevate your soccer experience with our authentic gear, combining quality and style. Explore the best in the game at MLNK."
            </p>
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
            <p>Phone: +223 456 789</p>
          </div>
        </div>

        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} MLNK </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

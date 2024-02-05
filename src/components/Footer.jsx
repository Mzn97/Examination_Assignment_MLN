import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Connect with MLNK</h4>
          <p></p>
          
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="39" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M16.5 7.5l0 .01" />
  </svg>
</a>

<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="37" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
  </svg>
</a>

<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="37" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
</a>

          <p></p>

          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="37" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-5, 0)">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
  </svg>
</a>

          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="37" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(1, 0)">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
    <path d="M10 9l5 3l-5 3z" />
  </svg>
</a>

<a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-pinterest" width="37" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#666666" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(6, 0)">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 20l4 -9" />
    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </svg>
</a>

</div>    

        <div className="footer-section">
          <h4>Customer service</h4>
          <ul className="footer-links">
            <li><Link to="/Information" className="information-link">Shipping Info</Link></li>
          </ul>
            <p> - Delivery </p>
            <p> - Exchanges & Returns </p>
            <p> - Purchase Terms </p>
        </div>

        <div className="footer-section">
          <h4>Procducts</h4>
          <ul className="footer-links">
            <li><Link to="/Products" className="products-link">In stock</Link></li>
          </ul>
            <p> - SHIRTS </p>
            <p> - SHOES </p>
            <p> - FOOTBALLS </p>
        </div>


        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@MLNK.com</p>
          <p>Phone: +123 456 789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sweden MLNK, Inc. All Rights Reserved </p>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import '../style/Information.css';

const Information = () => {
  return (
    <div className="information-container">
      <h1>Information</h1>

      <section>
        <h2>Delivery </h2>

        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="100" height="65" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
          <path d="M3 9l4 0" />
        </svg>

        <p>We provide FREE STANDARD SHIPPING on all orders.</p>
        <p>Our efficient delivery system ensures that your chosen football gear is dispatched promptly to your doorstep. Whether you're upgrading your cleats, grabbing the latest jerseys, or getting ready for a new season, we've got you covered.</p>
        <p>Our shipping typically takes between 3 - 5 days for delivery of all items.</p>
      </section>

      <section>
        <h2>Exchanges & Returns</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-return" width="100" height="65" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
          <path d="M9 17l6 0" />
          <path d="M13 6h5l3 5v6h-2" />
        </svg>
        <p>We are committed to ensuring your satisfaction with every kick, pass, and goal. In the rare event that you need to exchange or return your football equipment, we've got you covered with our hassle-free process.</p>

        <h4 style={{ color: '#666666' }}>We offer our customer ▼  </h4>
        <p>• Delivery Assurance </p>
        <p>• Simple Exchanges </p>
        <p>• Easy Returns </p>
      </section>

      <section>
        <h2>Purchase Terms</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-description" width="100" height="65" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M9 17h6" />
          <path d="M9 13h6" />
        </svg>
        <p>Here are our Purchase Terms to ensure you enjoy every moment on the field ▼ </p>
        <p>• Swift Delivery </p>
        <p>• Quality Assurance </p>
        <p>• Effortless Ordering </p>
      </section>

      <section>
        <h2>Purpose</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trophy" width="65" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#555" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 21l8 0" />
          <path d="M12 17l0 4" />
          <path d="M7 4l10 0" />
          <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
          <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        </svg>
        <p>Changing the game starts with those that play it. We work with athletes, communities, and organizations around the world that are challenging the status quo, championing diversity, and bringing people together. All with the goal of creating a better future for everyone.</p>
      </section>
    </div>
  );
};

export default Information;
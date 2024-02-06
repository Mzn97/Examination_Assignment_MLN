import React from 'react';
import '../style/PurchaseConfirmation.css';


const PurchaseConfirmation = () => {

   // const location = this.props;
   // const { state } = location;
    //const email = state ? state.email : null;

    return (
        <div className='confirmation-container'>
            <h2>Purchase Completed</h2>
            
            <p>Thank you for your purchase! Your order is being processed.</p>
        </div>
    );
}

export default PurchaseConfirmation;
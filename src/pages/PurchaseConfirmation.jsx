import React from 'react';
import '../style/PurchaseConfirmation.css'

const PurchaseConfirmation = () => {
    return (
        <div className='confirmation-container'>
            <h2>Purchase Completed</h2>
            <p>Thank you for your purchase! Your order is being processed.</p>
        </div>
    );
}

export default PurchaseConfirmation;
import React from 'react';
import '../style/PurchaseConfirmation.css';


const PurchaseConfirmation = () => {

     // Generera ett slumpmässigt ordernummer
     const orderNumber = Math.floor(Math.random() * 900000) + 100000; // Ger ett nummer mellan 100000 och 999999

    return (
        <div className='confirmation-container'>
            <h2>Purchase Completed</h2> 
            
            <p>Thank you for shopping at MLNK.</p>
            <p>We have received your order <strong>{orderNumber}.</strong></p><br></br> 
            <p> We will send an email with a pickup confirmation</p> 
            <p> as soon as the order is ready for collection from the store.</p>
    
        </div>
    );
}

export default PurchaseConfirmation;
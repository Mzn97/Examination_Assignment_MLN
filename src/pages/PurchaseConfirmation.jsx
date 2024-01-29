import React from 'react';
import '../style/PurchaseConfirmation.css'

const PurchaseConfirmation = () => {
    return (
        <div className='confirmation-container'>
            <h2>Köpet genomfört</h2>
            <p>Tack för ditt köp! Din beställning bearbetas.</p>
        </div>
    );
}

export default PurchaseConfirmation;
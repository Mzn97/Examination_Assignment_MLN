import React from 'react';
import '../style/ShoppingCart.css'

const ShoppingCart = () => {

    return(
        <div>
            <h1 className='shopping-cart'>KUNDKORG TEST</h1>
            <a href="/checkout"><button>Go to Checkout</button></a>
            {/*Behövs att fixas!! Pop-up ska komma upp istället för en hel sida*/}
        </div>
    )
}

export default ShoppingCart
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../style/ShoppingCart.css';

const ShoppingCart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleBuyClick = (product) => {
        //Visar rutan med produkt information
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleModalClose = () =>{
        //Tar bort rutan
        setIsModalOpen(false);
    };

    return (
        <div className="shopping-cart">
            <h2 className="shopping-cart-title">Shopping Cart</h2>
            <ul className="shopping-cart-list">
                {/* List av produkter som finns i 'Shopping Cart' */}
                <li onClick={() => handleBuyClick({name: 'Product1', price: 100})}>
                    Product 1
                </li>
                <li onClick={() => handleBuyClick({ name: 'Product 2', price: 200 })}>
                    Product 2
                </li>
            </ul>
            <div className="shopping-cart-total">
                <p>Total:</p>
                <p>$0.00</p>
            </div>
            <button className="shopping-cart-checkout">Checkout</button>
            <Popup open={isModalOpen} onClose={handleModalClose} closeOnDocumentClick>
                {/*'open' är en boolean som väljer ifall modal ska vara öppen eller stängt. 'onClose' är när kunden väljer att ta bort rutan*/}
                {selectedProduct && (
                    <div className="modal-content">
                        <h3>{selectedProduct.name}</h3>
                        <p>Price: ${selectedProduct.price}</p>
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default ShoppingCart;
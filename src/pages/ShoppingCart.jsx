import React, { useState, useEffect, useContext } from "react";
import {CartContext} from "../App.jsx";
import style from '../style/ShoppingCart.module.css'
import { Link } from "react-router-dom";
import CardImage from "../components/CardImage.jsx";
import { FaTrash } from 'react-icons/fa'; // Importerar FaTrash - papperskorg/remove-knapp


const ShoppingCart = ({cartItems, addItemToCart}) => {
    const cart = useContext(CartContext)
        console.log(cart)
    function calculateTotalPrice(cartItems) {
        // Filtrerar ut produkten med antal <= 0
        const validItems = cartItems.filter((item) => item.quantity > 0);
        // Kalkylerar total priset för de valda produkterna
        return validItems.reduce((total, item) => total + item.price * item.quantity, 0);
        // return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <div className={style["test-cart"]}>
            {/*<ShoppingCartImage />*/}
            <div className={style["shopping-cart"]}>
                <h1>Shopping Cart</h1>
                <div className={style["cart-items"]}>
                    {cart.cart.map((item, index) => (
                        <div className={style["cart-item"]} key={index}>
                            <div className={style["cart-image"]}>
                                <CardImage imageUrl={item.image}  />
                            </div>
                            <div className={style["item-details"]}>
                                <div className={style["item-name"]}>{item.title}</div>
                                <div className={style["item-quantity"]}>
                                        <button onClick={() => cart.removeQuantity(item.id)}>-</button>
                                    <div><small>{item.quantity}x</small></div>
                                        <button onClick={() => cart.addQuantity(item.id)}>+</button>
                                </div>
                                <div className={style["item-price"]}>{item.price} :-</div>
                                <div className={style["remove-icon"]} onClick={() => cart.removeItemFromCart(item.id)}>
                                    <FaTrash />
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
                <div className={style["cart-total"]}>
                    <Link to={{ pathname: "/checkout", state: { cartItems: cartItems } }} className={style["checkout-button"]}>Checkout</Link>
                    {/* <a href="/checkout" className={style["checkout-button"]}>Go to Checkout</a>      DEN HÄR RADEN ÄR TILLAGD */}
                    Total: {calculateTotalPrice(cart.cart)} :-
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
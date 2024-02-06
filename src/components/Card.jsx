import React, { useState, useContext } from 'react';
import { CartContext } from "../App.jsx";

function Card({ prod }) {
    const [showDescription, setShowDescription] = useState(false);
    const { addItemToCart } = useContext(CartContext);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const handleAddToCart = () => {
        addItemToCart({id: prod.id, price: prod.attributes.price, title: prod.attributes.title, quantity: 1});
    }

    return (
        <div className="card">
        <div  onClick={toggleDescription}>
            {showDescription ? (
                
                <div className="description">
                      <h2>{prod.attributes.title}</h2>
                        <p>{prod.attributes.price} :-</p><hr></hr>
                    <p>{prod.attributes.description}</p>
                    <p> _</p>
                   
                </div>
            ) : (
                <>
                    <img className='shopimg' src={`http://localhost:${import.meta.env.VITE_PORT}` + prod.attributes.image.data.attributes.url} alt="shop" height={290} width={233} />
                    <div>
                    <p> +</p> 
                        
                        <h2>{prod.attributes.title}</h2>
                        <p>{prod.attributes.price} :-</p> 
                       
                    </div> 
                </>
            )}
        </div>
        <button className='btn' onClick={handleAddToCart}>Buy</button>
        </div>
    );
}

export default Card;
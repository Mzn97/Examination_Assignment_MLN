import React, { useState } from 'react';

function Card({ prod }) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

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
                    <img src={'http://localhost:1337' + prod.attributes.image.data.attributes.url} alt="shop" height={290} width={233} />
                    <div>
                    <p> +</p> 
                        
                        <h2>{prod.attributes.title}</h2>
                        <p>{prod.attributes.price} :-</p> 
                       
                    </div> 
                </>
            )}
        </div>
        <button className='btn'>Buy</button>
        </div>
    );
}

export default Card;
import React from "react";

const CardImage = ({ imageUrl }) => {
    return (
        <div className="card-image">
            <img src={imageUrl} alt="Product" />
        </div>
    )
}

export default CardImage;
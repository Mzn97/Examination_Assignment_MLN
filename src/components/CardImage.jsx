import React from "react";


const CardImage = ({imageUrl}) => {

    console.log(imageUrl)

    return (
        <div className="card-image">
            <img src={`http://localhost:${import.meta.env.VITE_PORT}` + imageUrl} alt="CartImg" height={170} width={150}/>
        </div>
    )
}

export default CardImage;

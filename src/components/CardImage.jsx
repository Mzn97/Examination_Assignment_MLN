import React from "react";



const CardImage = ({imageUrl}) => {

    console.log(imageUrl)

    return (
        <div className="card-image">
            <img src={`http://localhost:${import.meta.env.VITE_PORT}` + imageUrl}
                 alt="CartImg"
                 height={160}
                 width={150}
                 style={{ borderRadius: "50px"}}
            />
        </div>
    )
}

export default CardImage;

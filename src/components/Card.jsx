
function Card(prop){
    console.log(prop);
    return (
        <div className="card">
            <img src="src\img\photo-1676498111080-5b73b7f0122c.avif" alt="shop image" height={250}></img>
            <h2>{prop.prod.attributes.title}</h2>
            <p>{prop.prod.attributes.price} :-</p>
            <button className='btn'>Buy</button>
        </div>
    );

}

export default Card

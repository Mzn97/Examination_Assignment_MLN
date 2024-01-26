
function Card(prop){
    console.log(prop);
    return (
        <div className="card">
            <img src={'http://localhost:1337' + prop.prod.attributes.image.data.attributes.url} alt="shop" height={290} width={233}></img>
            <h2>{prop.prod.attributes.title}</h2>
            <p>{prop.prod.attributes.price} :-</p>
            <button className='btn'>Buy</button>
        </div>
    );

}

export default Card



//http://localhost:1337"$ till image
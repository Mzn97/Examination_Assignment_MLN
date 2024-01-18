

function Card(){
    return (
        <Box>
        <div className="card">
            <img src="" alt="shop pic" height={250}></img>
            <h2>Produkt Namn</h2>
            <p>Produkt beskrivning</p>
            <button className='btn'>Lägg till i varukorgen</button>
        </div>
        </Box>
    );

}

export default Card
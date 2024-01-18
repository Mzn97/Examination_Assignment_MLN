import styled from 'styled-components'

const Box = styled.div`
    width: 173.5px;
    height: 390px;
    background-color: #f5eeeef6;
    border-radius: 5px;
    margin:2.5em;
    box-shadow: 5px 5px 5px grey;
    text-align : center;

`

function Card(){
    return (
        <Box>
        <div className="card">
            <img src="src/components/pic/photo-1560012057-4372e14c5085.avif" alt="shop pic" height={250}></img>
            <h2>Produkt Namn</h2>
            <p>Produkt beskrivning</p>
            <button className='btn'>Lägg till i varukorgen</button>
        </div>
        </Box>
    );

}

export default Card
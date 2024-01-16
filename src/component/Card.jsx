import styled from 'styled-components'

const Box = styled.div`
    width: 333px;
    height: 400px;
    background-color: #d8edd8;
    border-radius: .5em;

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
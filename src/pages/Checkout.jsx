import React, { useState } from 'react'
import '../style/Checkout.css'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    // useState hook används för att hantera formulärdata.
    // Initierar en state-variabel 'formData' med ett objekt som innehåller tomma strängar för varje fält.
    const [formData, setFormData] = useState({
        email: "",
        phone: "", 
        name: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    })
    const navigate = useNavigate()

    // handleChange uppdaterar formData när användaren skriver i ett inputfält.
    // Varje fält identifieras med 'name' och uppdateras med det nya värdet.
    const handleChange = (event) => {
        setFormData({
            ...formData, // Kopierar befintliga data i state
            [event.target.name]: event.target.value,
        })
    }

    // handleSubmit körs när formuläret skickas.
    // Den förhindrar sidans standarduppdatering och navigerar sedan till bekräftelsesidan.
    const handleSubmit = (event) => {
        event.preventDefault() // Förhindrar default beteende
        console.log('Form Data:', formData) // Loggar formulärdata
        navigate('/purchase-confirmation') // Omdirigerar till köpbekräftelsesidan
    }

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            {/* Varje inputfält är bundet till ett specifikt värde i formData och uppdateras via handleChange */}
            {/* "name"-attributet i varje input matchar en nyckel i formData */}
            {/* Hänvisar till funktionen "handleSubmit" när användaren kllickar på genomför köp, eftersom den är kopplad till onSubmit */}
            <form onSubmit={handleSubmit}>
                <h3>Kontaktinformation</h3>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-postadress"
                    /* required */
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefonnummer"
                    /* required */
                />

                <h3>Leveransadress</h3>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Fullständigt namn"
                    /* required */
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Adress"
                    /* required */
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Stad"
                    /* required */
                />
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Postnummer"
                    /* required */
                />

                <h3>Betalningsinformation</h3>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Kortnummer"
                    /* required */
                />
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="Utgångsdatum MM/ÅÅ"
                    /* required */
                />
                <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    /* required */
                />
                <button type="submit">Genomför köp</button>
            </form>
        </div>
    )
}

export default Checkout;
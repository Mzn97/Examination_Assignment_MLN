import React, { useState } from 'react'
import '../style/Checkout.css'

const Checkout = () => {
    // Skapar ett formulärdata objekt med hjälp av useState. Till en början är alla fälten tomma
    // Först är formData tomt, sen när formData fylls i --> setFormData
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

    // Används för att uppdatera formData när användaren fyller i något i input fälten
    // event.target.name riktar sig till name attributet i HTML koden och används som länken för att uppdatera rätt fält
    // Som i sin tur skickar det användaren matar in till event.target.value och sparas
    // spreadingen ()...formData) kopierar de befintliga värdena så att tidigare data inte blir förlorad
    // Till sist används setFormData för att uppdatera formData med det användaren har matat in
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    // Denna ska ändras så att man kommer till en sida som  säger att köpet är genomfört
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form Data:', formData)
        alert('Tack för din beställning!')
    }

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>

            {/* Hänvisar till funktionen ovan och öppnar alert fönstret när användaren trycker på "genomför köp" */}
            <form onSubmit={handleSubmit}>
                <h3>Kontaktinformation</h3>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-postadress"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Telefonnummer"
                    required
                />

                <h3>Leveransadress</h3>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Fullständigt namn"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Adress"
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Stad"
                    required
                />
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Postnummer"
                    required
                />

                <h3>Betalningsinformation</h3>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Kortnummer"
                    required
                />
                <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="Utgångsdatum MM/ÅÅ"
                    required
                />
                <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    required
                />
                <button type="submit">Genomför köp</button>
            </form>
        </div>
    )
}

export default Checkout;
import React, { useState } from 'react'
import '../style/CheckoutForm.css'
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
//import { withRouter } from 'react-router-dom';

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
        //const { history, formData } = this.props;
        console.log('Form Data:', formData) // Loggar formulärdata
        sendConfirmationEmail();
       // history.push('/purchase-confirmation', {email: formData.email});
        navigate('/purchase-confirmation', {email: formData.email}) // Omdirigerar till köpbekräftelsesidan
    };
        // config, appsettings.json (för inte visa nycklarna?)
    const sendConfirmationEmail = () => {
        const serviceId = 'service_jzn8rjq'; 
        const templateId = 'template_fig3c7k'; 
        const publicKey = 'zOr1Qa1PNpHLqisnU'; 

        emailjs.send(serviceId, templateId, {
            to_email: formData.email, // Använd e-postadressen från formuläret
            to_name: formData.name, // Använd namnet från formuläret
            reply_to: formData.email,
            from_name: "MLNK",
            message: "Thank you for your order!"
        }, publicKey)
        .then((response) => {
            console.log('Mail sent:', response);
        })
        .catch((error) => {
            console.error('Error sending mail:', error);
        });
    };




    return (
        <div className="checkout-form">
            {/* Varje inputfält är bundet till ett specifikt värde i formData och uppdateras via handleChange */}
            {/* "name"-attributet i varje input matchar en nyckel i formData */}
            {/* Hänvisar till funktionen "handleSubmit" när användaren kllickar på genomför köp, eftersom den är kopplad till onSubmit */}
            <form onSubmit={handleSubmit}>
                <h3>Contact Information</h3>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    /* required */
                />

                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    /* required */
                />

                <h3>Delivery Address</h3>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    autoComplete="name"
                    /* required */
                />

                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    autoComplete="address"
                    /* required */
                />

                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    /* required */
                />

                <input
                    type="number"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    /* required */
                />

                <h3>Payment Information</h3>
                <input
                    type="number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Card Number"
                    autoComplete="cc-number"
                    /* required */
                />

                <input
                    type="number"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="Expiration Date MM/YY"
                    autoComplete="cc-exp"
                    /* required */
                />

                <input
                    type="number"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="CVC/CVV"
                    autoComplete="cc-csc"
                    /* required */
                />
                <button className='complete-purchase-btn' type="submit">Complete Purchase</button>
                <a href="/ShoppingCart" className="back-btn">Back to Shopping Cart</a>
            </form>
        </div>
    )
}

//export default withRouter(Checkout);
export default Checkout;
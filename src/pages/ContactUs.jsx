import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../style/ContactUs.css'

const ContactForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_3ym5b6h', 'template_mp2j04o', form.current, 'LmxFhS-dooDm9Km1G')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent!');
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong. Please try again!');
            })
    }

    return (
        <div>
            <h1 className="contact-form-h1">CONTACT US</h1>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label className="form-label">Name</label>
                <input className="form-input"
                    type="text" 
                    name="from_name" 
                    required 
                />

                <label className="form-label">Email</label>
                <input className="form-input"
                    type="email" 
                    name="from_email" 
                    required 
                />

                <label className="form-label">Message</label>
                <textarea className="form-textarea" 
                    name="message" 
                    required
                />

                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;
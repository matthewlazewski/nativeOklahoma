import React, { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () =>{
        if (name && email && message) {
            // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }

    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <div id="contact-form">
            <div class="d-flex inline-flex">
                <input class="m-2" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input class="m-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <textarea class="m-2" rows="5" cols="47" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button id='submit-button'  onClick={submit}>Send Message</button>
            {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
        </div>
    );
};

export default ContactForm;
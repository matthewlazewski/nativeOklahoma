import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
       <Container className="text-center mt-5 w-100 p-0">
            <div class="footer">

                <p class="pt-2 mb-1"> JOIN OUR NEWSLETTER - FOR FREE! </p>

                <div id="subscribe" class="d-flex inline-flex align-center justify-content-center mb-3">
                    <input id="footer-email" type='email' required pattern="^.+\.[a-zA-Z]{2,63}$" placeholder="Enter email here"></input>
                    <button id="submit-button">Subscribe</button>
                </div>
                <h4 class="pt-1">ADAM PROCTOR</h4>
                <h6>FOUNDER | EDITOR-IN-CHIEF</h6>
                <p>adam@nativeoklahoma.us | 918.409.7252 | P.O. BOX 1151, Jenks, OK 74037</p>

                <p>© 2021 Native Okahoma Magazine.</p>
            </div>
        </Container>

    )
}

export default Footer;
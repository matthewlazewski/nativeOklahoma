import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import ContactPhoto from '../images/contactPage.jpg';
import { SocialIcon } from 'react-social-icons';
import ContactForm from './ContactForm.js'

const Contact = (props) => {

    return (
        <Container fluid className="" style={{margin: '0 !important', padding: 0, }}>
        <Header />
            <img src={ContactPhoto} style={{width: '100%'}} /> 
            <div >
            <div class="article d-flex inline-flex align-content-stretch justify-content-between p-3">
                <div class="pr-3">
                    <div style={{textAlign: 'center'}}>
                        <h4 class="pt-1" style={{color: 'rgb(155, 40, 42)'}}>Looking for more information? Get in touch with us today.</h4>
                        <p>Native Oklahoma Magazine is a publication not only for the visitor to Oklahoma, it is also a resource for our Native community and neighbors. Please let us know how much our publications mean to you and your family!</p>
                    </div>
                </div>
                <div class="headline p-3">
                    <div class="d-flex inline-flex justify-content-around align-items-center text-center"> 
                        <div class="contact-info">
                            <h6>Email:</h6><a href="mailto: adam@nativeoklahoma.us">adam@nativeoklahoma.us</a>
                        </div>
                        <div class="vertical"></div>
                        <div class="contact-info">
                            <h6>Phone:</h6><a href=" tel:918-409-7252">918.409.7252</a>
                        </div>
                        <div class="vertical"></div>
                        <div class="contact-info">
                            <h6>Follow:</h6>
                            <div class="d-flex inline-flex">
                                <SocialIcon className="p-2" network="facebook" url="https://www.facebook.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                                <SocialIcon className="p-2" network="twitter" url="https://twitter.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                                <SocialIcon className="p-2" network="instagram" url="https://www.instagram.com/nativeoklahomamagazine/" style={{ height: 25, width: 25 }}></SocialIcon>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>

                </div>
            </div>     
            </div>
            <Footer />
        </Container>
    )
}

export default Contact;
import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, Button } from 'semantic-ui-react';


const SERVICE_ID = "service_ydn3bgp";
const TEMPLATE_ID = "template_ovtf6il";
const USER_ID = "Ip_g2b2mokS7ePh6w";


const Footer = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };



    return (
       <Container className="text-center mt-5 w-100 p-0">
            <div class="footer">

                <p class="pt-2 mb-1 display-5"> JOIN OUR NEWSLETTER - FOR FREE! </p>

                <div id="subscribe" class="d-flex inline-flex align-center justify-content-center mb-3">
                    <Form id="subscribe" class="d-flex inline-flex align-center justify-content-center mb-3" onSubmit={handleOnSubmit}>
            
                    <Form.Field
                        id='footer-email'
                        control={Input}
                        name='user_email'
                        placeholder='Email'
                        required
                        icon='mail'
                        iconPosition='left'
                        class="m-3 footer-email"
                    />
                    
        
            <Button id='submit-button' class="mt-3 pr-2 pl-2">Subscribe</Button>
            {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
        </Form>
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


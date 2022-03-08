import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';


const SERVICE_ID = "**************";
const TEMPLATE_ID = "*******";
const USER_ID = "****************";

const ContactForm = () => {

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

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <Form id="contact-form" onSubmit={handleOnSubmit}>
            <div class="d-flex inline-flex m-2">
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        name='user_email'
                        placeholder='Email'
                        required
                        icon='mail'
                        iconPosition='left'
                        class="m-3"
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        name='user_name'
                        placeholder='Name'
                        required
                        icon='user circle'
                        iconPosition='left'
                        class="m-3"
                    />
            </div>
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                cols={50}
                name='user_message'
                placeholder='Message…'
                required
            />
            <button id='submit-button'>Send Message</button>
            {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
        </Form>
    );
};

export default ContactForm;
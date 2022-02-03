import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';


const Culture = (props) => {
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    )
}

export default Culture;
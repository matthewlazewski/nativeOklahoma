import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Southwest from '../images/SouthwestTrading.jpg';
import MuscogeeFest from '../images/muscogee_fest.jpg';
import Redmoon from '../images/redmoon.jpg';


const Events = (props) => {
    return (
        <Container fluid className="" style={{margin: '0 !important', padding: 0, }}>
            <Header />
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Ongoing</h1>
                    <div class="event">
                        <img style={{maxWidth: '25%', maxHeight: '50%'}} src={Southwest} alt="southwest" />
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Upcoming</h1>
                    <div class="event">
                        <img src={Redmoon} alt="Redmoon"/>
                    </div>
                    <div class="d-flex">
                        <img src={MuscogeeFest} alt="southwest" />
                    </div>
                </div>
            <Footer />
        </Container>
    )
}

export default Events;
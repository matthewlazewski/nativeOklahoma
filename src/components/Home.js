import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ImageSlider from './imageSlider';
import Informed from '../images/stayinformed.jpg';
import NOKMag from '../images/NOKMag.jpg';
import advertise from '../images/advertise.jpg';
import Footer from './Footer';

const Home = (props) => {
    return (
        <Container className="align-items-center" style={{margin: '0 !important', padding: 0}}>
            <div class="w-100">
                <Header/>
            </div>
            <div class="home-main">
                <ImageSlider/>
                <div class="home-pics">
                    <img id="stay-informed" src={Informed} alt="stay-informed"/>
                </div>
                <div>
                    News and Events Go Here
                </div>
                <div class="home-pics">
                    <img src={NOKMag} alt="NOK Mag" />
                </div>
                <div class="home-pics">
                    <img src={advertise} alt="advertise" />
                </div>
            </div>
            <div class="w-100">
                <Footer/>
            </div>
        </Container>
    )
}

export default Home;
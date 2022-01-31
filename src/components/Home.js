import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ImageSlider from './imageSlider'
import Informed from '../images/stayinformed.jpg'

const Home = (props) => {
    return (
        <Container style={{margin: '0 !important', padding: 0}}>
            <div class="w-100">
                <Header/>
            </div>
            <div>
                <ImageSlider/>
            </div>
            <div>
                <img src={Informed} alt="stay-informed"/>
            </div>
        </Container>
    )
}

export default Home;
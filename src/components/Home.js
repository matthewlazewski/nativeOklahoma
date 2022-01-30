import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';


const Home = (props) => {
    return (
        <Container>
            <div>
                <Header/>
            </div>
        </Container>
    )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import NavBar from './NavBar';
import Ad from './Ad.js'

import { PersonCircle } from 'react-bootstrap-icons';


const Header = (props) => {
    return(
        <Container fluid className="text-center w-100 p-0" style={{padding: 0}}>

            <div className="d-flex justify-content-around">
                <div class="home-pics p-4">
                    <img className="d-flex w-75" src={logo} alt="Native"/>
                </div>
                <Ad />
            </div>
            
            <div className="header d-flex justify-content-between flex-wrap align-items-center w-100">
            
            
            </div>
            <div className="d-flex justify-content-around text-center w-100">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;
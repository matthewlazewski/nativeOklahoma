import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import NavBar from './NavBar';
import { PersonCircle } from 'react-bootstrap-icons';


const Header = (props) => {
    return(
        <Container className="text-center w-100 p-0">
            
            <div className="header d-flex justify-content-between flex-wrap align-items-center w-100">
            
            
            </div>
            <div className="d-flex justify-content-around text-center w-100">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;
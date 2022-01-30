import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import NavBar from './NavBar';
import { SocialIcon } from 'react-social-icons';
import { PersonCircle } from 'react-bootstrap-icons';

const Header = (props) => {
    return(
        <Container className="text-center mt-5">
            <div className="d-flex align-items-center justify-content-around p-2">
                <div>
                    <PersonCircle/>
                    <Link href="/login" class="p-1 text-dark">Log In</Link>
                </div>
                <img src={logo} alt="Native"/>
                <div className="d-flex align-items-center">
                    <SocialIcon network="facebook" url="https://www.facebook.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon network="twitter" url="https://twitter.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon network="instagram" url="https://www.instagram.com/nativeoklahomamagazine/" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon network="linkedin" url="https://www.linkedin.com/company/native-oklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                </div>
            </div>
            <div className="d-flex justify-content-around text-center">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;
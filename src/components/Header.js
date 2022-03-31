import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import NavBar from './NavBar';
import { SocialIcon } from 'react-social-icons';
import { PersonCircle } from 'react-bootstrap-icons';


const Header = (props) => {
    return(
        <Container className="text-center mt-5 w-100 p-0">
            <div className="header d-flex flex-wrap align-items-center justify-content-around p-2 w-100">
                <div>
                    {/* <PersonCircle style={{color: 'rgb(117,16,18)'}}/>
                    <Link to="/login" className="p-1 text-dark">Log In</Link> */}
                </div> 
                <img id="head-img" src={logo} alt="Native"/>
                <div className="d-flex align-items-center">
                    <SocialIcon className="p-2" network="facebook" url="https://www.facebook.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-2" network="twitter" url="https://twitter.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-2" network="instagram" url="https://www.instagram.com/nativeoklahomamagazine/" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-2" network="linkedin" url="https://www.linkedin.com/company/native-oklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                </div>
            </div>
            <div className="d-flex justify-content-around text-center w-100">
                <NavBar/>
            </div>
        </Container>
    )
}

export default Header;
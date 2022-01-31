import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import AboutImage from '../images/aboutImage.jpg';
import Adam from '../images/adam.jpg';
import Footer from './Footer'

const About = (props) => {
    return (
        <Container>
            <Header/>
            
            <img src={AboutImage} style={{width: '100%'}} /> 
            <div class="article d-flex inline-flex align-content-stretch justify-content-between p-3">
                <div class="pr-3">
                    <img src={Adam}/>
                    <div style={{textAlign: 'center'}}>
                        <h4 class="pt-1" style={{color: 'rgb(155, 40, 42)'}}>ADAM PROCTOR</h4>
                        <h6 style={{color: '#AD7F09'}}>FOUNDER | EDITOR-IN-CHIEF</h6>
                    </div>
                </div>
                <div class="headline p-3">
                    <h2 style={{color: 'rgb(155, 40, 42)'}}>Quality news for the Native Community and our neighbors</h2>
                    <strong style={{color: 'rgb(155, 40, 42)'}}>NATIVE OKLAHOMA MAGAZINE</strong> is a publication not only for the visitor to Oklahoma, it is also a resource for our Native community and neighbors. Every month, Native Oklahoma's award-winning writers showcase Native artists, cooks, foods, culture, and crafts - as well as current events and powwows.​
                    Every issue includes an event calendar and list of Native American attractions across Oklahoma, as well maps of areas featured in the issue. Native Oklahoma also includes a list of gaming venues, places to stay, and the location of tribal headquarters. 
                </div>
            </div>     
            <Footer/>        
        </Container>
    )
}

export default About;
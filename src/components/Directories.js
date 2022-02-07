import React from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import TribalDirectory from '../images/TribalDirectory.jpg';
import Resorts from '../images/ResortListings.jpg';
import GolfCourses from '../images/GolfClubs.jpg';
import RVListings from '../images/RVListings.jpg';
import TradePosts from '../images/TradePosts.jpg';


const Directories = (props) => {
    return (
        <Container>
            <Header />
            <div class="d-flex flex-column pt-3">
                <div>
                    <ul id="directoryHeader">
                        <li><Link activeClass="active" to="OklahomaTribalDirectory" spy={true} smooth={true}/>Oklahoma Tribal Directory</li>
                        <li><Link to="ResortsCasinos" spy={true} smooth={true}>Resorts & Casinos</Link></li>
                        <li><Link to="GolfCourses" spy={true} smooth={true}>Golf Courses</Link></li>
                        <li><Link to="RVListings" spy={true} smooth={true}>RV Listings</Link></li>
                        <li><Link to="TradePosts" spy={true} smooth={true}>Trade Posts</Link></li>
                    </ul>
                </div>
                <div id="OklahomaTribalDirectory" class="home-pics p-2 p2">
                    <img src={TribalDirectory} />
                </div>
                <div id="ResortsCasinos" class="home-pics p-2 p2">
                    <img src={Resorts} />
                </div>
                <div id="GolfCourses" class="home-pics p-2 p2">
                    <img src={GolfCourses} />
                </div>
                <div id="RVListings" class="home-pics p-2 p2">
                    <img src={RVListings} />
                </div>
                <div id="TradePosts" class="home-pics p-2 p2">
                    <img src={TradePosts} />
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default Directories;
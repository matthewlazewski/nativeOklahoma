import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Twenty19 from './MagazineCovers/2019.js';
import Twenty20 from './MagazineCovers/2020.js';
import Twenty21 from './MagazineCovers/2021.js';
import Twenty22 from './MagazineCovers/2022.js';
import Twenty19Header from '../images/2019Header.jpg';
import Twenty20Header from '../images/2020Header.jpg';


const NOKMagazine = () => {
    return (
        <Container>
            <Header />
            <div id="2022" class="magYear">
                {/* put banner here */}
                <Twenty22 />
            </div>
            <div id="2021" class="magYear">
                {/* put banner here */}
                <Twenty21 />
            </div>
            <div id="2020" class="magYear">
                <img src={Twenty20Header} />
                <Twenty20 />
            </div>
            <div id="2019" class="magYear">
                <img src={Twenty19Header} />
                <Twenty19 />
            </div>
            <Footer />
        </Container>
    )
}

export default NOKMagazine;
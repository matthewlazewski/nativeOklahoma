import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Twenty19 from './MagazineCovers/2019.js';
import Twenty20 from './MagazineCovers/2020.js';
import Twenty21 from './MagazineCovers/2021.js';
import Twenty22 from './MagazineCovers/2022.js';


const NOKMagazine = (props) => {
    return (
        <Container>
            <Header />
            <Twenty19 />
            <Twenty20 />
            <Twenty21 />
            <Twenty22 />
            <Footer />
        </Container>
    )
}

export default NOKMagazine;
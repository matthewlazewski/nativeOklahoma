import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Twenty19 from './MagazineCovers/2019.js';
import Twenty20 from './MagazineCovers/2020.js';
import Twenty21 from './MagazineCovers/2021.js';
import Twenty22 from './MagazineCovers/2022.js';
import Twenty19Header from '../images/MagazineYears/2019.png';
import Twenty20Header from '../images/MagazineYears/2020.png';
import Twenty21Header from '../images/MagazineYears/2021.png';
import Twenty22Header from '../images/MagazineYears/2022.png';
import MagExample from '../images/magExample.jpg';
import MagExample2 from '../images/magExample2.jpg';
import April2022 from '../images/2022/April2022.jpg'


const NOKMagazine = () => {
    return (
        <Container>
        <Header />
        <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="newissue d-flex inline-flex justify-content-between mb-2">
                <div class="magYear">
                    <a target="_blank" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e0c93944-4d90-3afa-ae4d-4756dd03a655" download><img src={April2022} alt="April2022" /></a>
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center m-2">
                    <a class="mb-3" id="latestDownload" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e0c93944-4d90-3afa-ae4d-4756dd03a655" download>Download</a>
                    <p>Check Out Our Latest Issue</p>
                </div>
            </div>
            <div class="article d-flex inline-flex align-items-center justify-content-center mr-0 ml-0 mb-2">
                <img src={MagExample}/>
                <img src={MagExample2}/>
            </div>
            <div class="d-flex justify-content-center">
                <img src={Twenty22Header}/>
            </div>
            <Twenty22 />
            <div class="d-flex justify-content-center">
                <img src={Twenty21Header}/>
            </div>
            <Twenty21 />
            <div class="d-flex justify-content-center">
                <img src={Twenty20Header}/>
            </div>
            <Twenty20 />
            <div class="d-flex justify-content-center">
                <img src={Twenty19Header} />
            </div>
            <Twenty19 />
        </div>
        <Footer />
        </Container>
    )
}

export default NOKMagazine;
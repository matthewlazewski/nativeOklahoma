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
import MagExample from '../images/magExample.jpg';
import MagExample2 from '../images/magExample2.jpg';


const NOKMagazine = () => {
    return (
        <Container>
        <Header />
        <div class="d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex inline-flex justify-content-between mb-2">
                <div>
                    <Twenty22 />
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center m-2">
                    <a class="mb-3" id="latestDownload" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/d0423d_bdeb1a4ee5934cbab66cd989da873f0a.pdf" download>Download</a>
                    <p>Check Out Our Latest Issue</p>
                </div>
            </div>
            <div class="article d-flex inline-flex align-items-center justify-content-center mr-0 ml-0 mb-2">
                <img src={MagExample}/>
                <img src={MagExample2}/>
            </div>
            {/* put banner here */}
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
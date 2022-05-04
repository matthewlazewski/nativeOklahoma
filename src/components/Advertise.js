import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';


const Advertise = (props) => {
    return (
        <Container fluid className="" style={{margin: '0 !important', padding: 0, }}>
        <Header />
            <div class="text-center p-2">
                <h3 class="title">Magazine Advertising Rates</h3>
            </div>
            <div class="article d-flex p-3">
                <div class="headline">
                    <h6>Premium Full Page - $2,200</h6>
                    <p>
                        Premium Full Page is the cover pages, Inside Front Cover, and Inside/ Outside Back Cover of the Magazine.
                    </p>
                    <br></br>
                    <h6>Frequency Discounts</h6>
                    <p>3x = 10%  6x = 15% 9x = 20% 12x = 25%</p>
                </div>
                <div class="headline">
                    <h6>Guidelines</h6>
                    <ul>
                        <li>Trim size is 8' x 10.5" - add at least 0.125" for bleed on the full page ad</li>
                        <li>300 dpi CMYK PDF files are preferred but JPG files are acceptable</li>
                        <li>Please insure that black text is not "rich black"</li>
                    </ul>
                </div>
            </div>
            <div id="ad-table">
                <Table responsive striped bordered hover >
                    <thead>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Rate</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Full Page</td>
                            <td>8" x 10.75"</td>
                            <td>$1,800.00</td>
                        </tr>
                        <tr>
                            <td>1/2 Page Horizontal</td>
                            <td>7.25" x 4.75"</td>
                            <td>$1,050.00</td>
                        </tr>
                        <tr>
                            <td>1/2 Page Vertical</td>
                            <td>3.5" x 9.75"</td>
                            <td>$1,050.00</td>
                        </tr>
                        <tr>
                            <td>1/3 Page</td>
                            <td>7.25" x 3.125"</td>
                            <td>$750.00</td>
                        </tr>
                        <tr>
                            <td>1/4 Page</td>
                            <td>3.5" x 4.75"</td>
                            <td>$525.00</td>
                        </tr>
                        <tr>
                            <td>1/8 Page</td>
                            <td>3.75" x 2.31"</td>
                            <td>$250.00</td>
                        </tr>
                        <tr>
                            <td>1/12 Page</td>
                            <td>2.25" x 2.25"</td>
                            <td>$180.00</td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
            <div id="rateCardBanner" class="article d-flex text-center justify-content-around align-items-center p-2">
                <div class="bannerItem">
                    <h6>DOWNLOAD OUR RATE CARD</h6>
                    <p>To see a more detailed breakdown</p>
                    <a class="download" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_5eac4de539ca4e0f91cd4431b88a2ade.pdf" download>DOWNLOAD</a>
                </div>
                <div class="bannerItem">
                    <h6>DOWNLOAD OUR BROCHURE</h6>
                    <p>To learn more about NOK Magazine</p>
                    <a class="download" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_c27cdec6c3ec4a1a8af086bc061a10a0.pdf" download>DOWNLOAD</a>
                </div>
                <div class="bannerItem">
                    <h6>QUESTIONS?</h6>
                    <p>We would love to hear from you!</p>
                    <a class="download" href="/contact">CONTACT US</a>
                </div>
            </div>
            <div class="text-center p-2">
                <h3 class="title">Web Advertising Rates</h3>
            </div>
            <div id="ad-table">
                <Table responsive striped bordered hover >
                    <thead>
                        <th>Type</th>
                        <th>Size</th>
                        <th>Rate</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Large Leaderboard</td>
                            <td>970 x 90 pixels</td>
                            <td>$1,500 / month</td>
                        </tr>
                        <tr>
                            <td>Leaderboard</td>
                            <td>728 x 90 pixels</td>
                            <td>$1,000 / month</td>
                        </tr>
                        <tr>
                            <td>Banner</td>
                            <td>468 x 60 pixels</td>
                            <td>$800</td>
                        </tr>
                        <tr>
                            <td>Square</td>
                            <td>250 x 250 pixels</td>
                            <td>$400</td>
                        </tr>
                    </tbody>
                </Table> 
            </div>
            <Footer />
        </Container>
    )
}

export default Advertise;
import React, { useState } from "react";
import Buffalo from '../images/buffalo.jpg';
import Subscribe from '../images/subscribeBackground.jpg';
import Southwest from '../images/SouthwestTrading.jpg';
import MuscogeeFest from '../images/muscogee_fest.jpg';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const ImageSlider = ({currentIssue}) => {
   
    
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel slide={false} fade={false} activeIndex={index} onSelect={handleSelect} class="p-2">
            <Carousel.Item id="carouselCurrent">
                <div class="d-flex align-content-center justify-content-center h-100">
                    <img
                    className="carousel-pic"
                    src={ currentIssue }
                    alt="Current Issue"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ Buffalo }
                alt="Buffalo"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ Subscribe }
                alt="Subscribe"
                />
            </Carousel.Item>
            <Carousel.Item>
                <div class="d-flex align-content-center justify-content-center h-100">

                    <img
                    className="carousel-pic"
                    src={ Southwest }
                    alt="Southwest"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="d-flex align-content-center justify-content-center h-100">

                    <img
                    className="carousel-pic"
                    src={ MuscogeeFest }
                    alt="Muscogee Fest"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );

}

export default ImageSlider;
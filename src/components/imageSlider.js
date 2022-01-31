import React, { useState } from "react";
import Buffalo from '../images/buffalo.jpg';
import Subscribe from '../images/subscribeBackground.jpg';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const ImageSlider = () => {
   
    
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} class="p-2">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ Buffalo }
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ Subscribe }
            alt="Second slide"
            />
        </Carousel.Item>
        </Carousel>
    );

}

export default ImageSlider;
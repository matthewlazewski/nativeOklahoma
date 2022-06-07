import React, { useState } from "react";
import Buffalo from '../images/buffalo.jpg';
import Subscribe from '../images/subscribeBackground.jpg';
import Southwest from '../images/SouthwestTrading.jpg';
import MuscogeeFest from '../images/muscogee_fest.jpg';
import { Carousel } from "react-bootstrap";
import HempOil from "../images/hemp_oil.png";
import Art from "../images/art.jpg";
import ArtGallery from "../images/art_gallery.png";
import Choctalk from "../images/choctalk.png";
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
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1jbBPamPDpDQ6o9fSnJ_-H8OMcomK3Fj1/view?usp=sharing" download>
                    <img
                    className="carousel-pic"
                    src={ currentIssue }
                    alt="Current Issue"
                    />
                </a>
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
            <Carousel.Item >
                <div class="d-flex align-items-center justify-content-center h-100 flex-column text-center">
                <a target="_blank" rel="noreferrer" href="https://native-oklahoma-store.myshopify.com/products/native-vegan-hemp-seed-oil">
                    <h3>Check Out Our Vitamins and Supplements!</h3>
                    <img
                    className="carousel-pic"
                    src={ HempOil }
                    alt="Current Issue"
                    />
                </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div class="d-flex align-items-center justify-content-center h-100 flex-column text-center">
                <a target="_blank" rel="noreferrer" href="https://native-oklahoma-store.myshopify.com/products/yaakni-chokma-good-earth-special-edition-blanket">
                    <h3>Check Out Our Blankets!</h3>
                    <img
                    className="carousel-pic"
                    src={ Art }
                    alt="Current Issue"
                    />
                </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div class="d-flex align-items-center justify-content-center h-100 flex-column text-center">
                <a target="_blank" rel="noreferrer" href="https://native-oklahoma-store.myshopify.com/collections/art?sort_by=price-descending">
                    <h3>Check Out Our Art!</h3>
                    <img
                    className="carousel-pic"
                    src={ ArtGallery }
                    alt="Current Issue"
                    />
                </a>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div class="d-flex align-items-center justify-content-center flex-column text-center">
                <a target="_blank" rel="noreferrer" href="https://nativechoctalk.com/podcasts/season-2/">
                    <h3>Listen to Season 2 Now!</h3>

                    <img
                    className="carousel-pic"
                    src={ Choctalk }
                    alt="Current Issue"
                    />
                </a>
                </div>
            </Carousel.Item>
        </Carousel>
    );

}

export default ImageSlider;
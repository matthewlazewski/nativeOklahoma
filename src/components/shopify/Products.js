import Product from './Product';
import React, { useState } from "react";
import Carousel  from "react-multi-carousel";
import "bootstrap/dist/css/bootstrap.css";
import 'react-multi-carousel/lib/styles.css';

const Products = (props) => {
   
    let products = props.products.map((product) => {
    return (
        <div>
            <Product
            addVariantToCart={props.addVariantToCart}
            client={props.client}
            key={product.id.toString()}
            product={product}
            />
        </div>
    );
    });

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      return(
        <Carousel
            slide={false} 
            fade={false}
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all 0.5"
            transitionDuration={3000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {products}
        </Carousel>
    );
}

export default Products;
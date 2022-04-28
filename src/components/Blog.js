import React, { useState } from 'react';
import parser  from 'html-react-parser';
import $ from "jquery";

const Blog = (props) => {
    const { id, published, url, title, content, author } = props.feed
    let post;

    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false);
    }

    const getPosition = (string, subString, index) => {
        return string.split(subString, index).join(subString).length;
    }

    const images = $(content).find("img");
    console.log(typeof(images)) // object

    // filter the object here - then clean up your errors
    const parsed = $(content).find(".text-container");


    return (
      
        <div class="blogPost">
           
            <div class="blogContent">
                {/* <img src={parser(mainImg[0].src)} /> */}
                <a onMouseEnter={onHover} onMouseLeave={onLeave} href={url} target="_blank">{ parser(parsed[1].outerHTML) }</a>
            </div>
            
        </div>
    );
}

export default Blog;
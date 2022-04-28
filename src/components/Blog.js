import React, { useState } from 'react';
import parser  from 'html-react-parser';
import $ from "jquery";

const Blog = (props) => {
    const [image, setImage] = useState([])
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

    // filter the object here - then clean up your errors
    const parsed = $(content).find(".text-container");

    return (
        <div>
            
            <div class="blogPost">
                {(() => {for(let i = 0; i < images.length; i ++){
                    
                    if(images[i].alt == "main-pic"){
                        // console.log(images[i].src)
                        return <img src={images[i].src} />
                    }
                }})()}
                <div class="blogContent">
                    <a onMouseEnter={onHover} onMouseLeave={onLeave} href={url} target="_blank">{ parser(parsed[1].outerHTML) }</a>
                </div>
                
            </div>
        </div>
    );
}

export default Blog;
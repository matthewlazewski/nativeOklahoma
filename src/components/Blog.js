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

    const parsed = $(content).find(".text-container");


    return (
      
        <div class="blogPost">
           
            <div class="blogContent">
                <a onMouseEnter={onHover} onMouseLeave={onLeave} href={url} target="_blank">{ parser(parsed[1].outerHTML) }</a>
            </div>
            
        </div>
    );
}

export default Blog;
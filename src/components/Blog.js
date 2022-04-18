import React, { useState } from 'react';
import parse from 'html-react-parser';

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
      

    let blogContent = parse(content);

    let img = content.substring(getPosition(content, "<span>", 5), content.indexOf("</p>"))
    
    
  
    post = (
        <div class="blogPost">
            <a onMouseEnter={onHover} onMouseLeave={onLeave} href={url} target="_blank">
                { title }  
            </a>
            <div>
                { img }
            </div>
        </div>
    );
         

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Blog;
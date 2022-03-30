import React, { useState } from 'react';
import parse from 'html-react-parser';

const Blog = (props) => {
    const { id, published, url, title, content } = props.feed
    let post;

    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false);
    }

  
    post = (
        <div class="blogPost">
            <a onMouseEnter={onHover} onMouseLeave={onLeave} href={url} target="_blank">
                { parse(content) }
                <p>{parse(published) }</p>
            </a>
        </div>
    );
         

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Blog;
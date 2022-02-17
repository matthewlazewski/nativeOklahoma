import React, { useState } from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url} = props.feed
    let post;

    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false);
    }

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='20%'
                    height='auto' 
                    src={media_url} 
                    type="video/mp4" 
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <div class="instaPic">
                    <a onMouseEnter={onHover} onMouseLeave={onLeave} href={media_url} target="_blank">
                        <img 
                            width='100%'
                            height='100%'
                            id={id} 
                            src={media_url} 
                            alt={caption} 
                        />
                        { hover ? <p>{caption}</p> : ""}
                    </a>
                </div>
            );
            break;
        default:
            post = (
                <div class="instaPic">
                    <a onMouseEnter={onHover} onMouseLeave={onLeave} href={media_url} target="_blank">
                        <img 
                            width='100%'
                            height='100%'
                            id={id} 
                            src={media_url} 
                            alt={caption} 
                        />
                        { hover ? <p>{caption}</p> : ""}
                    </a>
                </div>
            );
    }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;
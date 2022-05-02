import React, { useState } from 'react';

const Blog = (props) => {
    const { mp4, name, image, description, link  } = props.pod
    // const [isPlaying, setIsPlaying] = useState(false);


    const [ hover, setHover ] = useState(false);
    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false);
    }

    // const togglePlay = () => {
    //     isPlaying ? setIsPlaying(false) : setIsPlaying(true);
    // }

    

    return (
        <>

            <div class="pod">
                <div class="pod-pic">
                    <img src={image} alt={description} />
                </div>
                <div class="pod-content">
                    
                    {/* <a href={mp4} onClick={togglePlay} > Play </a> */}
                    <a onMouseEnter={onHover} onMouseLeave={onLeave} href={link} rel="norefferer" target="_blank"><h6>{name}</h6>{ description }</a>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    );
}

export default Blog;
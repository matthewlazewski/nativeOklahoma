import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Podcast from './Podcast.js';

const podcasts = [
    {
        id: 1,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/James_Nells.jpg",
        description: "S2, E16: “Coach James Nells (Navajo) On Growing Up On The Reservation & The Sport That Changed His Life”",
        link: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation",
        mp4: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    }
]


const PodcastFeed = () => {
 
    return (
    
        <div className="d-flex flex-column-reverse justify-content-start text-center">
            {podcasts.slice(-3).map((podcast) => (
                <Podcast key={podcast.id} pod={podcast}  />
            ))}
        </div>
    );
    
}

export default PodcastFeed;
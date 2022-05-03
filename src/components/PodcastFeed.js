import React from 'react';
import Podcast from './Podcast.js';

const podcasts = [
    {
        id: 1,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/James_Nells.jpg",
        description: "S2, E16: “Coach James Nells (Navajo) On Growing Up On The Reservation & The Sport That Changed His Life”",
        link: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation",
        mp4: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },{
        id: 2,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/Chrissy.jpg",
        description: 'S2, E15: “The Edwards Store, The Treaty Of Dancing Rabbit Creek & A Woman Named Sukky: Chrissy Gray Dickmeyer, Choctaw"',
        link: "https://soundcloud.com/nativechoctalk/s2-e15-the-edwards-store-the-treaty-of-dancing-rabbit-creek-a-woman-named-sukky",
        mp4: ""
    },{
        id: 3,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/pic_3.png",
        description: "S2, E14: “The Mystery Of The Train Ride To Indian Territory”: Jennifer Story (Choctaw, Tewa, Ohkay Owingeh Pueblo & Oglala Lakota)”",
        link: "https://soundcloud.com/nativechoctalk/s2-e14-the-mystery-of-the-train-ride-to-indian-territory-jennifer-story",
        mp4: ""
    }
]


const PodcastFeed = () => {
 
    return (
    
        <div className="d-flex flex-column justify-content-start text-center">
            {podcasts.slice(-3).map((podcast) => (
                <Podcast key={podcast.id} pod={podcast}  />
            ))}
        </div>
    );
    
}

export default PodcastFeed;
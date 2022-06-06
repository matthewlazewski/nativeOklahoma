import React from 'react';
import Podcast from './Podcast.js';

const podcasts = [
    {
        id: 3,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/pic_3.png",
        description: "S2, E14: “The Mystery Of The Train Ride To Indian Territory”: Jennifer Story (Choctaw, Tewa, Ohkay Owingeh Pueblo & Oglala Lakota)”",
        link: "https://soundcloud.com/nativechoctalk/s2-e14-the-mystery-of-the-train-ride-to-indian-territory-jennifer-story",
        mp4: ""
    },
    {
        id: 2,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/Chrissy.jpg",
        description: 'S2, E15: “The Edwards Store, The Treaty Of Dancing Rabbit Creek & A Woman Named Sukky: Chrissy Gray Dickmeyer, Choctaw"',
        link: "https://soundcloud.com/nativechoctalk/s2-e15-the-edwards-store-the-treaty-of-dancing-rabbit-creek-a-woman-named-sukky",
        mp4: ""
    },
    {
        id: 1,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/James_Nells.jpg",
        description: "S2, E16: “Coach James Nells (Navajo) On Growing Up On The Reservation & The Sport That Changed His Life”",
        link: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation",
        mp4: "https://soundcloud.com/nativechoctalk/s2-e16-coach-james-nells-navajo-on-growing-up-on-the-reservation?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        id: 4,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/750_Pixels.jpg",
        description: "S2, E17: “Terry Ware (Kiowa & Comanche) On The History Of Riverside Indian School, Wares Chapel, O Ho Mah, Hog Creek & Our Love Of Sonic Drinks”",
        link: "https://soundcloud.com/nativechoctalk/s2-e17-p1-a-fascinating-new-look-at-our-choctaw-history-by-the-decade-megan-baker",
        mp4: "https://soundcloud.com/nativechoctalk/s2-e17-p1-a-fascinating-new-look-at-our-choctaw-history-by-the-decade-megan-baker?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
    {
        id: 5,
        name: "Native ChocTalk",
        image: "https://nativechoctalk.com/images/Use.jpg",
        description: "S2, E18, Part 1: “A Fascinating New Look At Our Choctaw History By The Decade: Megan Baker (Choctaw), Historic Preservation Dept., Choctaw Nation Of Oklahoma”",
        link: "https://soundcloud.com/nativechoctalk/s2-e17-the-history-of-riverside-indian-school-wares-chapel-o-ho-mah-hog-creek",
        mp4: "https://soundcloud.com/nativechoctalk/s2-e17-the-history-of-riverside-indian-school-wares-chapel-o-ho-mah-hog-creek?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },
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
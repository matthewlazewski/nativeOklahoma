import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Feed from './Feed'

const InstagramFeed = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    const tokenProp = useRef(process.env.REACT_APP_INS_TOKEN);
    tokenProp.current = process.env.REACT_APP_INS_TOKEN;

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchPosts() {
            try{
                axios
                    .get(`http://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${token}`)
                    .then((resp)=>{
                        setFeedsData(resp.data.data)
                    })
            } catch(err) {
                console.log(err)
            }
        }

        fetchPosts();

        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container d-flex flex-wrap p-2">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
    
}

export default InstagramFeed;
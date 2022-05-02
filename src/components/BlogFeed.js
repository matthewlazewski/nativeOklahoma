import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Blog from './Blog.js';


const BlogFeed = ({token}) => {
    const [feeds, setFeedsData] = useState([])
    const tokenProp = useRef(process.env.REACT_APP_BLOGGER_KEY);
    tokenProp.current = process.env.REACT_APP_BLOGGER_KEY;

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchPosts() {
            try{
                axios
                    .get(`https://www.googleapis.com/blogger/v3/blogs/7214839477105802089/posts?key=${token}&maxResults=25`)
                    .then((resp)=>{
                        setFeedsData(resp.data.items)
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
    })

    return (
    
        <div className="d-flex flex-column-reverse justify-content-start text-center">
            {feeds.slice(-3).map((feed) => (
                <Blog key={feed.id} feed={feed} />
            ))}
        </div>
    );
    
}

export default BlogFeed;
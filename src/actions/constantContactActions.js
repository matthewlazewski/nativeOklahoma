const fetchPosts = () => {
    getAuthorizationURL()
    return (dispatch) => {
        fetch('https://api.cc.email/v3/emails/', {
            method: 'get',
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 13e0c177-b70c-4a6a-ae9b-f16da7729800'
            })
        })
            .then(res => res.json())
            // .then(resJson => console.log(resJson));
    }
}

const getAuthorizationURL = () => {
    const baseUrl = "https://api.cc.email/v3/idfed";
    const authUrl = `https://api.cc.email/v3/idfed?client_id=13e0c177-b70c-4a6a-ae9b-f16da7729800&redirect_uri=http://localhost:3000&response_type=code`
    fetch(authUrl).then(res => res.json()).then(resJson => console.log(resJson));
}

export { fetchPosts };
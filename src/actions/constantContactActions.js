import axios from 'axios';
const redirect_uri = "http%3A%2F%2Flocalhost%3A3000%2F"
const fetchPosts = () => {
    // getAuthorizationURL()
    getAccessToken();
    
    return (dispatch) => {
        fetch('https://api.cc.email/v3/emails/', {
            method: 'get',
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer X1bsPY40Bp8pysrntBsrq8cnZobBtFN4yetIwVjN5Ck'
            })
        })
            .then(res => res.json())
            .then(resJson => console.log(resJson));
    }
}

async function getAccessToken(){
    const base = "https://authz.constantcontact.com/oauth2/default/v1/token"
    const code = "X1bsPY40Bp8pysrntBsrq8cnZobBtFN4yetIwVjN5Ck"

    const url = `${base}?code=${code}&redirect_uri=${redirect_uri}&grant_type=authorization_code`;
    console.log(url);
    const auth = `${process.env.REACT_APP_CC_TOKEN} : ${process.env.REACT_APP_CC_SECRET_TOKEN}`
    const credentials = btoa(auth);
    console.log(credentials);
    const authorization = "Authorization: Basic " + credentials;
    axios.post(url,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': authorization
        }
    }).then(res => res.json)
    .then(resJson => console.log(resJson))

}

async function getAuthorizationURL() {
    const baseUrl = "https://api.cc.email/v3/idfed";
    const authUrl = `https://authz.constantcontact.com/oauth2/default/v1/authorize?client_id=${process.env.REACT_APP_CC_TOKEN}&redirect_uri=${redirect_uri}&response_type=code&state=235o250eddsdff&scope=account_read`
    console.log(authUrl);

    // let xhr = new XMLHttpRequest();
    // xhr.addEventListener('load', () => {
    //     console.log(xhr.responseText);
    // })

    // xhr.open('GET', authUrl);
    // xhr.send()
    const response = await axios.get(authUrl).then((response) => {})
    .catch((error) => {
        console.log(error.request);
    })
    // console.log(response.data);
}

export { fetchPosts };
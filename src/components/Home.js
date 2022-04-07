import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ImageSlider from './imageSlider';
import Informed from '../images/stayinformed.jpg';
import NOKMag from '../images/NOKMag.jpg';
import advertise from '../images/advertise.jpg';
import Footer from './Footer';
import Products from './shopify/Products.js';
import Shop from '../images/shopnok.jpg';
import Advertise from '../images/home-page-ad.jpg';
import InstagramFeed from './InstagramFeed';
import AdvertiseBackground from '../images/advertise-background.jpg';
import Buffalo from '../images/buffalo_full.jpg';
import Feb22 from '../images/2022/Feb2022.jpg';
import Ad1 from '../images/Ads/4.png';
import Ad2 from '../images/Ads/6.png';
import BlogFeed from './BlogFeed.js';
import logo from '../images/logo.jpg';
import { SocialIcon } from 'react-social-icons';
import April2022 from '../images/2022/April2022.jpg';



class Home extends React.Component {

    constructor() {
        super();
    
        this.state = {
            isCartOpen: false,
            checkout: { lineItems: [] },
            products: [],
            shop: {}
        };
    
        this.handleCartClose = this.handleCartClose.bind(this);
        this.addVariantToCart = this.addVariantToCart.bind(this);
        this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }

    // componentDidMount () {
    //     const script = document.createElement("script");
    
    //     script.src = 'https://www.googletagservices.com/dcm/dcmads.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    // }
    
    componentWillMount() {

        this.props.client.checkout.create().then((res) => {
            this.setState({
            checkout: res,
            });
        });

        this.props.client.product.fetchAll().then((res) => {
            this.setState({
            products: res,
            });
        });

        this.props.client.shop.fetchInfo().then((res) => {
            this.setState({
            shop: res,
            });
        });
    }

    addVariantToCart(variantId, quantity){
    this.setState({
        isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
        this.setState({
        checkout: res,
        });
    });
    }

    updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
        this.setState({
        checkout: res,
        });
    });
    }

    removeLineItemInCart(lineItemId) {
        const checkoutId = this.state.checkout.id

        return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
            this.setState({
            checkout: res,
            });
        });
    }

    handleCartClose() {
        this.setState({
            isCartOpen: false,
        });
    }

    render(){
        return (
            <Container className="align-items-center justify-content-center" style={{margin: '0 !important', padding: 0}}>
                <div class="w-100">
                    <Header/>
                </div>

                <div class="home-main d-flex flex-column">
                    <ImageSlider/>
                    {/* <div class="home-pics">
                        <img id="stay-informed" src={Informed} alt="stay-informed"/>
                    </div>
                    <div>
                        <BlogFeed token={process.env.REACT_APP_BLOGGER_KEY} /> */}
                    {/* </div> */}

                    <div class="home-pics p-5">
                        <img className="d-flex w-50" src={logo} alt="Native"/>
                    </div>

                    <div class="home-pics">
                        <img id="stay-informed" src={Shop} alt="shop" />
                    </div>
      
                    

                    <Products products={this.state.products} />
                    <div class="d-flex flex-column text-center justify-content-center align-items-center">
                        <a href="https://native-oklahoma-store.myshopify.com/" target="_blank" rel="noreferrer" id="shop">Shop Our Entire Store</a>
                    </div>
                    <div class="home-pics">
                        <img src={NOKMag} alt="NOK Mag" />
                    </div>
                    <div class="mag d-flex article inline-flex justify-content-center align-content-center text-center">
                        <div class="home-pics w-50">
                            <img id="buffalo" src={Buffalo} alt="buffalo"/>
                        </div>
                        <div class="home-mag w-50 d-flex flex-column align-items-center justify-content-center">
                            <img id="buffalo-full" style={{height: "40%", width: "50%"}} src={April2022} alt="latest issues"/>
                            <a id='advertiseButton' href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e0c93944-4d90-3afa-ae4d-4756dd03a655" target="_blank">Download Issue</a>
                        </div>
                    </div>
                    <div class="home-pics">
                        <img src={advertise} alt="advertise" />
                    </div>
                </div>
                <div class="d-flex article justify-content-between align-content-stretch p-0 m-0 mt-2">
                    <div id="advertiseWords" class="article d-flex flex-column w-50 align-items-center align-content-center justify-content-center">
                        <div class="adtext text-center w-75 lead mb-2">
                            <h3>ADVERTISE NOW!</h3>
                            Promote your business through Native Oklahoma! Click below to view rates and size specs. Ads work! Contact Adam Proctor for more at adam@nativeoklahoma.us or call 918.409.7252
                        </div>
                        <div id="adButtons" class="d-flex flex-column text-center">
                            <a id='advertiseButton' href="/advertise">View Rates</a>
                            <a class="download" href=" tel:918-409-7252">Call</a>
                            <a class="download"  href="mailto: adam@nativeoklahoma.us">Email</a>
                        </div>
                    </div>
                    <div id="adpic" class="home-pics d-flex justify-content-center w-50">
                        <img src={Advertise} />
                    </div>
                </div>
                <div id="instafeed" class="d-flex inline-flex align-content-center flex-wrap justify-content-center">
                    <InstagramFeed token={process.env.REACT_APP_INS_TOKEN} limit={3} />
                </div>
                {/* <div class="d-flex inline-flex justify-content-center pt-3 pb-0">
                    <div class="w-50 p-2 m-1">
                        <img src={Ad1} style={{height: "75%", width: "90%"}} alt="ads" />
                    </div>
                    <div class="w-50 p-2 m-1">
                        <img src={Ad2} style={{height: "75%", width: "90%"}} alt="ads" />
                    </div>
                </div> */}
                <div className="d-flex justify-content-center p-2">
                    <SocialIcon className="p-3" network="facebook" url="https://www.facebook.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-3" network="twitter" url="https://twitter.com/NativeOklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-3" network="instagram" url="https://www.instagram.com/nativeoklahomamagazine/" style={{ height: 25, width: 25 }}></SocialIcon>
                    <SocialIcon className="p-3" network="linkedin" url="https://www.linkedin.com/company/native-oklahoma" style={{ height: 25, width: 25 }}></SocialIcon>
                </div> 
                <div class=" home-pics w-100">
                    <Footer/>
                </div>
            </Container>
        )
    }
}

export default Home;
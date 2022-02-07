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
import Cart from './shopify/Cart.js';
import Shop from '../images/shopnok.jpg';

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
        console.log(this.props);
        return (
            <Container className="align-items-center" style={{margin: '0 !important', padding: 0}}>
                <div class="w-100">
                    <Header/>
                </div>
                <div class="home-main d-flex flex-column">
                    <ImageSlider/>
                    <div class="home-pics">
                        <img id="stay-informed" src={Informed} alt="stay-informed"/>
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
                    <div class="home-pics">
                        <img src={advertise} alt="advertise" />
                    </div>
                </div>
                <div class="w-100">
                    <Footer/>
                </div>
            </Container>
        )
    }
}

export default Home;
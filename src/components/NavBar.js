import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export default class NavBar extends React.Component {
    
    render(){
        return (
            <div class="d-flex text-center justify-content-around align-content-center w-100">
                <Navbar className='navbar w-100 d-flex justify-content-around text-light' expand="lg">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/about">About</Navbar.Brand>
                    {/* <Navbar.Brand href="/culture">Culture</Navbar.Brand> */}
                    {/* <Navbar.Brand href="/events">Events</Navbar.Brand>
                    <Navbar.Brand href="/mmip">MMIP</Navbar.Brand> */}
                    <Navbar.Brand href="/advertise">Advertise</Navbar.Brand>          
                    <Navbar.Brand href="/nok-magazine">NOK Magazine</Navbar.Brand>
                    <Navbar.Brand href="/directories">Directories</Navbar.Brand>     
                    <Navbar.Brand href="/contact">Contact</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
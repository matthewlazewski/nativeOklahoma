import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export default class NavBar extends React.Component {
    
    render(){
        return (
            <div class="text-center align-items-center">
                <Navbar className='navbar' expand="lg">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/about">About</Navbar.Brand>
                    <Navbar.Brand href="/culture">Culture</Navbar.Brand>
                    <Navbar.Brand href="/events">Events</Navbar.Brand>
                    <Navbar.Brand href="/mmip">MMIP</Navbar.Brand>
                    <Navbar.Brand href="/advertise">Advertise</Navbar.Brand>          
                    <Navbar.Brand href="/nok-magazine">NOK Magazine</Navbar.Brand>
                    <Navbar.Brand href="/directories">Directories</Navbar.Brand>     
                    <Navbar.Brand href="/contacts">Contacts</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
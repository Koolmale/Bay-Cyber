import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import '../../Assets/css/Nav.css';

const Styles= styled.div`
    .navbar{
        background-color:#222;

    }
    .navbar-brand,.navbar-nav .nav-link{
        color:#bbb;
        flex-direction:row;


    }

    &:hover{
        color:blue;


    }

    `;

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Bay Cyber</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home </Nav.Link>
                    <Nav.Item><Nav.Link href="/tutorial"> Tutorials </Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)

export default NavigationBar
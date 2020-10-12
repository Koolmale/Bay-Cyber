import React, { Component } from 'react'
import {Nav,Navbar,Button,FormControl,Form,NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import '../../Assets/css/Nav.css';
import Tutorial from '../BodyComponents/tutorialbody'

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
        <Navbar bg="dark" expand="lg" id='nav'>
          <Navbar.Brand href="#home">Bay Cyber Training</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Item><Nav.Link href="/tutorial" > Link</Nav.Link></Nav.Item>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success" className='btn btn-outline-warning'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    
      )
export default NavigationBar
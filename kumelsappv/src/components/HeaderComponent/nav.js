import React, { Component } from 'react'
import {Nav,Navbar,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import '../../Assets/css/Nav.css';


export const NavigationBar = () => (

        <Navbar className="navbar navbar-custom" expand="lg">
          <Navbar.Brand href="#home">Bay Cyber Training<img src="./src/components/HeaderComponent/cyber-security.png"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="tutorial">Tutorials</Nav.Link>
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
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

)

export default NavigationBar
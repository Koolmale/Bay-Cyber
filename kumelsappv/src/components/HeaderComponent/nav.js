import React, { Component } from 'react'
import {Nav,Navbar,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import '../../Assets/css/Nav.css';


export const NavigationBar = () => (

        <Navbar className="navbar navbar-custom" expand="lg">
          <Navbar.Brand href="#home"><img src={require('../HeaderComponent/logo.png')} id='logo' />Bay Cyber Training</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="tutorial">Tutorials</Nav.Link>
              <Nav.Link href="calendar">Calendar</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

)

export default NavigationBar
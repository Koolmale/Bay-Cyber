import React, {Component} from 'react';
import {Nav,Button, Collapse, Accordion, Card, ListGroup} from 'react-bootstrap';
import '../../Assets/css/tutoriallist.css';
import 'react-bootstrap'
import { Link} from 'react-router-dom'


export const Tutoriallist = () => {

  return (

<>

<Accordion defaultActiveKey="0" id='accordion'>
  
  <Card>
    <Card.Header className='header'>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <a href='/tutorial'>Home</a>
      </Accordion.Toggle>
    </Card.Header>
  </Card>

  <Card>
    <Card.Header className='header'>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Cryptography
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
    <Card>
  <Card.Body>
    <Card.Text>
      <a href='/IntroCrypto'>Intro Crypto</a><br/><hr/>
      <a href='/ascii'>ASCII (hex)</a><br/><hr/>
      <a href='/msub'>Monoalphabetic Substitution Cipher</a>
    </Card.Text>
  </Card.Body>
</Card>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header className='header'>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Passsword Cracking
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
    <Card>
    <Card.Body>
      <Card.Text>
        <a href='/IntroCrypto'>Hashcat</a><br/><hr/>
        <a href='/IntroCrypto'>John The Ripper</a>
      </Card.Text>
    </Card.Body>
    </Card>
    </Accordion.Collapse>
  </Card>
</Accordion>

</>
  )}



export default Tutoriallist;
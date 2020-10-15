import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Tutoriallist} from './tutoriallist'
import '../../Assets/css/tutbody.css';
import baccc from '../../Assets/baccc.png';

export const Tutorialbody = () => (


    <>

      <div class="hero-unit">
          <h1>Welcome</h1>
          <p>You made it ! Tutorials for days!/></p>
          <p>
            <img id="yay" src={require('../../Assets/baccc.png')}></img>
            <a class="btn btn-primary btn-large">
              Learn more
            </a>
          </p>


      </div>

      <Tutoriallist/>


    </>
   )

export default Tutorialbody;
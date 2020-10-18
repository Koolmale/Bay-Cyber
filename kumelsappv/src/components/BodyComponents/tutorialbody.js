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
            <img id="yay" src={require('../../Assets/pic1.jpg')}></img>
            <a class="btn btn-primary btn-large">
              Learn more
            </a>
          </p>


      </div>

      <Tutoriallist/>
      <div class="ytvideo">
           <h2 id="hed">Newest Tutorial! Follow us on Youtube!</h2>
           <div class="embed-responsive embed-responsive-16by9">
                <p>
                <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/Y5fxkMX4L6Q"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
           </div>
      </div>
    </>
   )

export default Tutorialbody;
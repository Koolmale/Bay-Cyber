import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Tutoriallist} from './tutoriallist'
import '../../Assets/css/tutbody.css'

export const Tutorialbody = () => (
      <div className='body'>
        <div class="hero-unit">
            <h1>Welcome!</h1>
            <p id='welcome'>Click on a topic on the left to start learning!</p>
            <p>
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
      </div>
   )

export default Tutorialbody;
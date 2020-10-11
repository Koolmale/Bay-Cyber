import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../slideshow.css' 


 
const fadeImages = [
    './images/Cybersecurity-top.jpg',
    './images/Cybersecurity-top.jpg',
    './images/Cybersecurity-top.jpg'
];
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt='slide 1'/>
            <script>console.log('hi')</script>
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt='slide 2'/>
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt='slide 3'/>
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
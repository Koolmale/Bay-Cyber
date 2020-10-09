import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../slideshow.css' 


 
const fadeImages = [
    '../../images/Cybersecurity-top.png',
    '../../images/Cybersecurity-top.jpg',
    '../../images/Cybersecurity-top.jpg'
];
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;
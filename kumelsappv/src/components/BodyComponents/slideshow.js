import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import '../../Assets/css/slideshow.css'

export default function App() {
  return (
    <div className='text'>
      <h2>Welcome! This is the Bay Cyber Training Site. Head on over to our tutorials page to learn more!</h2>
    <div className="slide-container" id='slide'>
      <Fade>
        <div className="each-fade">
          <img src={require('../images/img1.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img2.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img3.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img4.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img5.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img6.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img7.jpg')} className='img'/>
        </div>
        <div className="each-fade">
          <img src={require('../images/img8.jpg')} className='img'/>
        </div>
      </Fade>
    </div>
    </div>
  );
}
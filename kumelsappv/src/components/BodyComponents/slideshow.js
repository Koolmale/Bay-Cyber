import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

export default function App() {
  return (
    <div className="slide-container" id='slide'>
      <Fade>
        <div className="each-fade">
          <img src={require('../HeaderComponent/img1.png')} className='img'/>
          <h1>slide 1</h1>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} className='img'/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} className='img'/>
        </div>
      </Fade>
    </div>
  );
}
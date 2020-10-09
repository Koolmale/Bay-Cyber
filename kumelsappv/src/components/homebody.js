import React, { Component } from 'react';
import '../default.min.css';
import Slideshow from '../components/slideshow'
import 'react-slideshow-image/dist/styles.css'

class Body extends Component {
    render () {
        return(
            <div className='welcome'>
            <h1> Welcome!</h1>
            <Slideshow />
            </div>
        )
    }
}

export default Body;
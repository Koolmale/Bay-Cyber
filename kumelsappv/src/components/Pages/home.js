import React, { Component } from 'react';
import Tweet from '../BodyComponents/tweet' ;
import Calendar from '../BodyComponents/calendar'
import Slideshow from '../BodyComponents/slideshow'
import Footer from '../FooterComponent/Footer'
import '../../Assets/css/home.css'



function Home()
    {
        return(
            <div>
            <div id='body'>
                <div>
                    <Slideshow/>
                </div>
                <div>
                    <Calendar id='calendar'/>
                </div>

                <div>
                    <Tweet id='tweet'/>
                </div>
                <div>
                    <Footer id='footer'/>
                </div>
            </div>
            </div>
        );
    }

export default Home;
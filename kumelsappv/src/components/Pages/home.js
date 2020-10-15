import React, { Component } from 'react';
import Tweet from '../BodyComponents/tweet' ;
import Calendar from '../BodyComponents/calendar'
import Slideshow from '../BodyComponents/slideshow'


function Home()
    {
        return(
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
            </div>
        );
    }

export default Home;
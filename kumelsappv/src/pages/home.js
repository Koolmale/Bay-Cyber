import React, { Component } from 'react';
 import Tweet from '../components/tweet' ;
/* import TweetEmbed from 'react-tweet-embed' */
import Header from '../components/header';
import Calendar from '../components/calendar'
import Body from '../components/homebody'

class Home extends Component {

    render() {
        return(
            
            <div>
                {/* <Header /> */}
                <Body />
                <div className='body'>
                    <div className='child1'>
                        <Calendar />
                    </div>

                    <div className='child2'>
                        <Tweet />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
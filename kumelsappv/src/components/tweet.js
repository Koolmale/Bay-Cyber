/* import TweetEmbed from 'react-tweet-embed'; */
import React, { Component } from 'react'
import '../default.min.css';
import {TwitterTimelineEmbed} from 'react-twitter-embed';




class tweet extends Component {
    render() {
        return (
            <div id = 'tweet'>
            {/* <TweetEmbed id='771763270273294336'/> */} 
            <TwitterTimelineEmbed sourceType="profile" screenName="InfoSecIrvin" userId={'999299262000152577'} options={{height:350}}/>
            </div>
        )
    }
}

export default tweet;
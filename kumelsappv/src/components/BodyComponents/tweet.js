import React, { Component } from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import '../../Assets/css/home.css'

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

export default tweet
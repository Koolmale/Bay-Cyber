import TweetEmbed from 'react-tweet-embed';
import React, { Component } from 'react'
import '../default.min.css';




class tweet extends Component {
    render() {
        return (
            <div id = 'tweet'>
            <TweetEmbed id='771763270273294336'/> 
            </div>
        )
    }
}

export default tweet;
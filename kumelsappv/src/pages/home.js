import React, { Component } from 'react';
import TweetElement from '../components/tweet'

class Home extends Component {

    render() {
        return(
            <div>
                <div>
                    <TweetElement tweetId = '1313659152653119488' />
                </div>
            </div>
        )
    }
}

export default Home;
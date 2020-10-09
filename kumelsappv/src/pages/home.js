import React, { Component } from 'react';
/* import Tweet from '../components/tweet' */
import TweetEmbed from 'react-tweet-embed'

class Home extends Component {

    render() {
        return(
            <div>
                <div>
                <TweetEmbed id='771763270273294336' options={{theme: 'dark' }}/>
                </div>
            </div>
        )
    }
}

export default Home;
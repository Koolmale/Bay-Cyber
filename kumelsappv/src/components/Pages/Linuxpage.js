import React from 'react';
import {Tutoriallist} from '../BodyComponents/tutoriallist'
import {Tutpgbdyframe} from '../BodyComponents/tutpgbdyframe'

import '../../Assets/css/tutbody.css';

/* import TweetEmbed from 'react-tweet-embed' */

function Linux()
    {
        return(

            <>
                <div>

                    <h1>Linux Tutorials!</h1>
                </div>

                <Tutoriallist/>
                <Tutpgbdyframe/>
           </>


        );
    }

export default Linux;
import React from 'react';
import {Tutoriallist} from '../../BodyComponents/tutoriallist'

import '../../../Assets/css/tutbody.css';
import '../../../Assets/css/Linux/Installation.css';


/* import TweetEmbed from 'react-tweet-embed' */

function Installation()
    {
        return(

            <>

                <div class="Heading">
                    <header id="first">
                        Install Linux
                    </header>
                </div>

                <img id="secondimg" src={require('../../../Assets/penguin.png')}></img>

                <div className="intro">
                    <h1>
                        Where to start?
                    </h1>
                    <p>As mentioned earlier, Linux comes in different operating systems. For this
                    guide we will be installing Ubuntu 20.04 . This should give you an idea of what
                    it is like to install other OS and then you can try installing your OS, maybe even
                    make your own! </p>

                </div>


                <div className="requirments">
                    <h2>
                        Requirements:
                    </h2>
                    <ul>
                        <li>3 GB of Ram</li>
                        <li>20 GB of Memory Space</li>
                        <li>DVD/USB</li>
                        <li>1 hr</li>
                        <li>Rufus Bootable USB Maker</li>



                    </ul>

                </div>

                <Tutoriallist/>

                <div className="Steps">
                    <h3> Steps to Install:</h3>

                    <ul>
                        <li>To get started we are going to need to download some things first. Go to the Ubuntu Download Page and download the Ubuntu 20.04 .ISO file. https://ubuntu.com/download/desktop
                            Afterwards, go to the Rufus site and download the bootable drive maker software.
                            https://rufus.ie/
                        </li>

                        <li>
                            2.After you have those downloaded, open up Rufus and Plug in your USB.


                        </li>

                        <li>
                            3.Under the Devices menu, select your Device Letter.
                        </li>
                        <li>4.Hit the Select Button to Look for the ISO file that you want to install on the USB.
                        </li>
                        <li>
                            5.**Make Sure that you Back Up anything on the USB before Proceeding**
                        </li>
                        <li>
                            6. Hit Start and let the program do its thing.
                        </li>
                    </ul>

                </div>






                <footer id="footer">
                Just need this as a filler!
                </footer>
           </>



        );
    }

export default Installation;
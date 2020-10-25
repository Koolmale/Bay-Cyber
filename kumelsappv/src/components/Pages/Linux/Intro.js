import React from 'react';
import {Tutoriallist} from '../../BodyComponents/tutoriallist'
import '../../../Assets/Linux/Intro.css';
import '../../../Assets/css/tutbody.css';
/* import '../../../Assets/penguin.png'; */

function Intro()
    {
        return(

            <>

                <div class="Heading">
                    <header id="first">
                        Introduction to Linux
                    </header>
                </div>

{/*                 <img id="secondimg" src={require('../../../Assets/penguin.png')}></img>
 */}
                <div className="intro">
                    <h1>
                        What is Linux?
                    </h1>
                    <p>Linux is a family of Unix-based operating systems that are built from the Linux
                        Kernel. Many of the different variations include Ubuntu,Fedora,Kali,Red Hat and mich more.</p>

                </div>

                <div class="Heading2">
                    <header id="third">
                        History
                    </header>
                </div>


                <Tutoriallist/>

           </>


        );
    }

export default Intro;
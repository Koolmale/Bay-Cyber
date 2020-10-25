import React, {Component} from 'react';
import {Nav,Button} from 'react-bootstrap';
import '../../Assets/css/tutbdyframe.css';
/* import {Terminal} from 'xterm';
 */
export const Tutpgbdyframe = () => (

        <>

           <h1>Linux Tutorials!</h1>


           <div class="thebest">
                <div class="card bg-primary text-white yes">
                    <div class="card-body">What is Linux?</div>
                </div>
                <p> Linux is a ... just using this as filler!
                    Hopefully it all looks nicely.</p>
                <p> This is the second paragraph to this side</p>
           </div>

           <div class="thebest2">
                <div class="card bg-primary text-white yes">
                    <div class="card-body">Basic Commands</div>
                </div>

           </div>

            <div id="terminal">

                <iframe height="380px" width="200%" src="https://repl.it/@JuanSoberanes/SuperbHonestDefragment?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

            </div>



           <div class="thebest3">
                <div class="card bg-primary text-white yes">
                    <div class="card-body">Manual Pages</div>
                </div>
           </div>

        </>
   )

export default Tutpgbdyframe;
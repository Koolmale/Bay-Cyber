import React, {Component} from 'react';
import {Nav,Button} from 'react-bootstrap';
import '../../Assets/css/tutoriallist.css';


export const Tutoriallist = () => (

   <div id="accordion">

      <div class="card">
        <div class="card-header">
          <a class="card-link" data-toggle="collapse" href="#collapseOne">
            Linux
          </a>
        </div>
        <div id="collapseOne" class="collapse show" data-parent="#accordion">
          <div class="card-body">
            <a href="/LinuxIntro">Linux Introduction</a>
          </div>
          <div class="card-body">
            <a href="/BasicCommands">Basic Commands</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
            Windows
          </a>
        </div>
        <div id="collapseTwo" class="collapse" data-parent="#accordion">
          <div class="card-body">
            Basic Commands
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
            Pentesting
          </a>
        </div>
        <div id="collapseThree" class="collapse" data-parent="#accordion">
          <div class="card-body">
                What is Pentesting?

          </div>
        </div>
      </div>

</div>
)



export default Tutoriallist;


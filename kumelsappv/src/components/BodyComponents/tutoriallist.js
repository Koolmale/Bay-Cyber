import React, {Component} from 'react';
import {Nav,Button} from 'react-bootstrap';
import '../../Assets/css/tutoriallist.css';

export const Tutoriallist = () => (

    <div class="list-group">
        <a href="/Linux" class="list-group-item list-group-item-action active">
            <i class="fa fa-home"></i> Linux
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-camera"></i> Networking <span class="badge badge-pill badge-primary pull-right"></span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-music"></i> Something Else<span class="badge badge-pill badge-primary pull-right"></span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-film"></i> Forensics <span class="badge badge-pill badge-primary pull-right"></span>
        </a>
    </div>

   )

export default Tutoriallist;
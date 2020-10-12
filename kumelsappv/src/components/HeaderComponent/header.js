import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavigationBar} from './nav.js';
class Header extends Component{
render() {

  return (
        <NavigationBar/>
  );
    }
}
export default Header;
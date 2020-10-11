import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
render() {

  return (
   <header>
       <div className='navBar'>
           <div>
            <h1>Bay Cyber Training</h1>
            </div>

            <img src= 'https://images.squarespace-cdn.com/content/5de94f9a41c14050e1f6c067/1585940450349-UWYG4E02423OCMUAWZSU/BCL+logo.png?format=1500w&content-type=image%2Fpng' alt=''/>

            <nav>

            <div>
                <ul>
                    <li><Link to="/tutorial">Tutorial</Link></li>
                    <li><a className ="active" href="Home.html">Home</a></li>
                    <li><a href="#About us">About Us</a></li>
                    <li><Link to="/">Home</Link></li>

                </ul>

                </div>
            </nav>
            
        </div>
   </header>
  );
        }
}
export default Header;
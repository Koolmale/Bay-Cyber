import React, {Component} from 'react';
import '../default.min.css';
import SearchAppBar from './searchbar'


class Header extends Component{
render() {

  return (
   <header>
       <div className='navBar'>
           <div>
            <h1>Bay Cyber Training</h1>
            </div>
            
            <nav>

            <div>
                <ul>
                    <li><a class ="active" href="Home.html">Home</a></li>
                    <li><a href="tutorial.html">Tutorials</a></li>
                    <li><a href="#About us">About Us</a></li>
                </ul>

                </div>
            </nav>
            
            <img src= 'https://images.squarespace-cdn.com/content/5de94f9a41c14050e1f6c067/1585940450349-UWYG4E02423OCMUAWZSU/BCL+logo.png?format=1500w&content-type=image%2Fpng'/>
        </div>
   </header>
  );
        }
}
export default Header;
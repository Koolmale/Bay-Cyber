import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import './App.css'

export default function Ap() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <ul className='ul'>
              <li className='li'>
                <Link to="/"><img src={logo}  id='logo-container'/></Link>
              </li>
              <li className='li'>
                <Link to="/">Home</Link>
              </li>
              <li className='li'>
                <Link to="/about">About</Link>
              </li>
              <li className='li'>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );

    if (this.props === 'home') {
        return <h2 className='someText'>Home</h2>;
    }

    else if (this.props === 'about') {
        return <h2 className='someText'>About</h2>;
    }

    else if (this.props === 'users') {
        return <h2 className='someText'>Users</h2>;
    }

    else;
  }
  

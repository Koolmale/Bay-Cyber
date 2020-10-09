import React from 'react';
import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home.js'


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/' component={Home}/>
          <Route path = '/home' component = {Home}/>
        </Switch>
      
      </div>
    </Router>

  
  );
}

export default App;

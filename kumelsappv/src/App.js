import React from 'react';
import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path = '/' />
          <Route path = '/'  />
          <Route path = '/'/>
          <Route path = '/' />
          <Route path = '/' />
          <Route path = '/' />
        </Switch>
      
      </div>
    </Router>

  
  );
}

export default App;

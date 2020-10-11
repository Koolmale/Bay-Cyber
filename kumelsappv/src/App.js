import React from 'react';
import './App.css';
import './Assets/css/default.min.css';
import Header from './components/HeaderComponent/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/home';
import Tutorial from './components/Pages/tutorial';

    function App()
    {
      return (
          <Router>
            <div className="App">
                <Header/>
                <Switch>
                  <Route exact path ='/' component={Home}/>
                  <Route exact path = '/tutorial' component={Tutorial}/>
                </Switch>

            </div>
         </Router>
      );
    }



export default App;

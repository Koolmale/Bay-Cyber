import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/home';
import Tutorial from './components/Pages/tutorial';
import BasicCommands from './components/Pages/Linux/BasicCommands';
import Intro from './components/Pages/Linux/Intro';
import Layout from './components/HeaderComponent/Layout';
import {NavigationBar} from './components/HeaderComponent/Nav2';
import {Nav,Navbar,Button,FormControl,Form,NavDropdown} from 'react-bootstrap';

class App extends Component{
        render(){

          return (
            <>
               <Header/>
              <Layout>
                   <Router>
                        <div className="App">

                            <Switch>
                              <Route exact path ='/home' component={Home}/>
                              <Route exact path = '/tutorial' component={Tutorial}/>
                              <Route exact path = '/BasicCommands' component={BasicCommands}/>
                              <Route exact path = '/LinuxIntro' component={Intro}/>
                            </Switch>

                        </div>
                   </Router>
              </Layout>
            </>
          );
        }
    }



export default App;

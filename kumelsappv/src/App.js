import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/home';
import Tutorial from './components/Pages/tutorial';
import Linux from './components/Pages/Linuxpage';
import Layout from './components/HeaderComponent/Layout';
import {NavigationBar} from './components/HeaderComponent/Nav2';
import {Nav,Navbar,Button,FormControl,Form,NavDropdown} from 'react-bootstrap';
import Calendarpg from './components/Pages/calendarpg'

class App extends Component{
        render(){

          return (
            <>
               <Header/>
              <Layout>
                   <Router>
                        <div className="App">

                            <Switch>
                              <Route exact path ='/' component={Home}/>
                              <Route exact path = '/home' component={Home}/>
                              <Route exact path = '/tutorial' component={Tutorial}/>
                              <Route exact path ='/calendar' component={Calendarpg}/>
                              <Route exact path = '/Linux' component={Linux}/>
                            </Switch>

                        </div>
                   </Router>
              </Layout>
            </>
          );
        }
    }



export default App;

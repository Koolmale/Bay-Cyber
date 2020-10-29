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
import BasicCommands from './components/Pages/Linux/BasicCommands';
import IntroCrypto from './components/Pages/Crypto/Introcrypto';
import Ascii from './components/Pages/Crypto/ascii'
import Msub from './components/Pages/Crypto/msub'

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
                              <Route exact path = '/BasicCommands' component={BasicCommands}/>
                              {/* <Route exact path = '/LinuxIntro' component={Intro}/> */}
                              <Route exact path ='/calendar' component={Calendarpg}/>
                              <Route exact path = '/Linux' component={Linux}/>
                              <Route exact path ='/IntroCrypto' component={IntroCrypto}/>
                              <Route exact path ='/ascii' component={Ascii}/>
                              <Route exact pathh ='/msub' component={Msub}/>
                            </Switch>

                        </div>
                   </Router>
              </Layout>
            </>
          );
        }
    }



export default App;

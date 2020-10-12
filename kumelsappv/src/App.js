import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/home';
import Tutorial from './components/Pages/tutorial';
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
                              <Route exact path ='/' component={Home}/>
                              <Route exact path = '/tutorial' component={Tutorial}/>
                            </Switch>

                        </div>
                   </Router>
              </Layout>
            </>
          );
        }
    }



export default App;

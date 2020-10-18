import React,{Component} from 'react';
import './App.css';
import Header from './components/HeaderComponent/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/home.js'
import CalendarPg from './pages/calendarpg'
=======
import Home from './components/Pages/home';
import Tutorial from './components/Pages/tutorial';
import Layout from './components/HeaderComponent/Layout';
import {NavigationBar} from './components/HeaderComponent/Nav2';
import {Nav,Navbar,Button,FormControl,Form,NavDropdown} from 'react-bootstrap';
import Calendarpg from './components/Pages/calendarpg'
>>>>>>> testing

class App extends Component{
        render(){

<<<<<<< HEAD
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/calendarpg' exact component={CalendarPg}/>
          <Route path = '/home' component = {Home}/>
        </Switch>
      
      </div>
    </Router>
=======
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
                            </Switch>

                        </div>
                   </Router>
              </Layout>
            </>
          );
        }
    }

>>>>>>> testing


export default App;

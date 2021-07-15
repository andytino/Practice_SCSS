import React , { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import '../style/style.scss';

import Header from './Header/index'
import Home from './Page/Home'
import AboutMe from './Page/AboutMe'
import Blog from './Page/Blog'
import Test from './Page/Test'
import Contact from './Page/ContactMe'

class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        
        <Switch>
          <Home exact path ='/'/>
          <AboutMe path ='/aboutme'/>
          <Blog path='/blog'/>
          <Test path='/test'/>
          <Contact path = '/contactme'/>
        </Switch>
      </Router>
    )
  }
}

export default App;

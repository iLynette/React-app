import React from 'react';
import './App.css';
import {  Route } from 'react-router-dom';
import './App.css'

import Nav from './Nav';
import Home from './Home'
import Menu from './Menu';
import Contact from './Contact';
import { Switch } from 'react-router-dom';
  

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path = '/'component = { Home } />
        <Route path = '/menu'component = { Menu } />
        <Route path = '/contact'component = { Contact } />
      </Switch>
    </div>
  );
}

export default App;

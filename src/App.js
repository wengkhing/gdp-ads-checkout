import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Flex from './components/Flex'

import Home from './containers/Home'
import Inventory from './containers/Inventory'
import Shopping from './containers/Shopping'

import Navbar from './components/Navbar'
import CheckoutForm from './components/CheckoutForm'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shopping' component={Shopping}/>
          <Route path='/inventory' component={Inventory}/>
        </Switch>

        <CheckoutForm />
      </div>
    );
  }
}

export default App;

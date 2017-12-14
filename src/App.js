import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
// import Flex from './components/Flex'

import Home from './containers/Home'
import Inventory from './containers/Inventory'
import Shopping from './containers/Shopping'

import Navbar from './components/Navbar'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.app.user && <Navbar /> }
        <Switch>
          <Route path='/shopping' component={Shopping}/>
          <Route exact path='/' component={Home}/>
        </Switch>

      </div>
    );
  }
}

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(App);
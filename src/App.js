import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Flex from './components/Flex'

import Home from './containers/Home'
import Inventory from './containers/Inventory'
import Shopping from './containers/Shopping'

import Navbar from './components/Navbar'
import './App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          { this.props.app.user && <Navbar /> }
          <Switch>
            <Route path='/shopping' component={Shopping}/>
            <Route exact path='/' component={Home}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(App);
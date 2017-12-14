import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../actions'

import Flex from '../components/Flex'

class Home extends Component {

  state = {
    redirect: false
  }

  loginAs(name) {
    this.props.login(name)
    this.setState({
      redirect: true
    })
  }

  renderRedirect() {
    if (this.state.redirect)
      return <Redirect to="/shopping" />
  }

  render() {
    return (
      <Flex className='main-container' column>
        <Flex><h1>Login as</h1></Flex>
        <Flex><a onClick={() => this.loginAs('normal')}>Normal User</a></Flex>
        <Flex><a onClick={() => this.loginAs('unilever')}>Unilever</a></Flex>
        <Flex><a onClick={() => this.loginAs('apple')}>Apple</a></Flex>
        <Flex><a onClick={() => this.loginAs('nike')}>Nike</a></Flex>
        <Flex><a onClick={() => this.loginAs('ford')}>Ford</a></Flex>
        { this.renderRedirect() }
      </Flex>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
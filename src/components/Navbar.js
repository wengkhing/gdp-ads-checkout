import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Flex from './Flex'

import { logout } from '../actions'

class Navbar extends Component {

  state = {
    redirect: false
  }

  logout() {
    this.props.logout()
    this.setState({
      redirect: true
    })
  }

  renderRedirect() {
    if (this.state.redirect)
      return <Redirect to="/" />
  }

  render() {
    return (
      <Flex row gap={20}>
        <Flex><Link to='/shopping'>Get Ads</Link></Flex>
        <Flex><a onClick={() => this.logout()}>Logout</a></Flex>
        <Flex>{ this.renderRedirect() }</Flex>
      </Flex>
    );
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(null, mapDispatchToProps)(Navbar);
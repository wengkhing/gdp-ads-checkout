import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'

import { logout } from '../actions'
import './Navbar.scss'

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
      <div className='navbar'>
        <h1 className="navbar-header">Welcome, {this.props.app.user.name} </h1>
        <a className='navbar-button' onClick={() => this.logout()}>Logout</a>
        { this.renderRedirect() }
      </div>
    );
  }
}

function mapStateToProps({ app }) {
  return { app }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
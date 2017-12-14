import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../actions'

import Flex from '../components/Flex'
import './Home.scss'

class Home extends Component {

  state = {
    redirect: false
  }

  handleUserChange(ev) {
    console.log(ev.target.value);
    this.props.login(ev.target.value)
    this.setState({
      redirect: true,
    })
  }

  renderRedirect() {
    if (this.state.redirect)
      return <Redirect to="/shopping" />
  }

  render() {
    return (
      <Flex row className='background' mAlign='center' xAlign='center'>
        { this.renderRedirect() }
        <Flex column className="login-card">
          <Flex className='logo-container'>
            <img src="http://www.newscorpaustralia.com/sites/default/files/styles/news_610_wide/public/Seek%20logo.jpg?itok=tCMUevSd" alt="seek-logo"/>
          </Flex>
          <Flex><h1 className='__title'>Login as</h1></Flex>
          <select defaultValue='none' onChange={(ev) => this.handleUserChange(ev)}>
            <option  disabled value='none'>- Select a user -</option>
            <option value='default'>Default User</option>
            <option value='unilever'>Unilever</option>
            <option value='apple'>Apple</option>
            <option value='nike'>Nike</option>
            <option value='ford'>Ford</option>
          </select>
        </Flex>
      </Flex>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
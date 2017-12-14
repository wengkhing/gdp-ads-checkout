import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Flex from './Flex'

import { listProduct } from '../actions'

class Navbar extends Component {

  render() {
    return (
      <Flex row gap={20}>
        <Flex><Link to='/'>Home</Link></Flex>
        <Flex><Link to='/shopping'>Get Ads</Link></Flex>
        <Flex><Link to='/inventory'>Inventory</Link></Flex>
        <Flex>{ this.props.app.user && <Link to='/'>Logout</Link> }</Flex>
      </Flex>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ listProduct }, dispatch)
}

export default connect(mapStateToProps)(Navbar);
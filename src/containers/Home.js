import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'

class Home extends Component {
  render() {
    return (
      <Flex column>
        <Flex><h1>Login as</h1></Flex>
        <Flex><Link to='/inventory'>Normal User</Link></Flex>
        <Flex><Link to='/inventory'>Unilever</Link></Flex>
        <Flex><Link to='/inventory'>Apple</Link></Flex>
        <Flex><Link to='/inventory'>Nike</Link></Flex>
        <Flex><Link to='/inventory'>Ford</Link></Flex>
      </Flex>
    );
  }
}

export default Home
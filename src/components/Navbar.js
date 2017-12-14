import React from 'react'
import { Link } from 'react-router-dom'
import Flex from './Flex'

const Navbar = () => (
  <Flex row gap={20}>
    <Flex><Link to='/'>Home</Link></Flex>
    <Flex><Link to='/shopping'>Get Ads</Link></Flex>
    <Flex><Link to='/inventory'>Inventory</Link></Flex>
  </Flex>
)

export default Navbar;

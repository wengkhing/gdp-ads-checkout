import React, { Component } from 'react';
import Flex from '../components/Flex'
import ProductCard from '../components/ProductCard'

class Shopping extends Component {
  render() {
    return (
      <Flex className="main-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    );
  }
}

export default Shopping
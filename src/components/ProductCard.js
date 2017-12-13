import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flex from './Flex'
import './ProductCard.scss'

const ProductCard = () => {
  return (
    <Flex gap="20" row className='product-card'>
      <Flex className="product-image" mSize="100px">
        <img src="http://via.placeholder.com/100x100" />
      </Flex>
      <Flex column grow>
        <h1 className="__title">Classic Ad</h1>
        <p className="__description">Offer the most basic level of advertisement</p>
        <Flex gap="6" row>
          <Flex><button>-</button></Flex>
          <Flex><input type="text" value="1"/></Flex>
          <Flex><button>+</button></Flex>
        </Flex>
      </Flex>
      <Flex>
        $299.90
      </Flex>
    </Flex>
  )
}

export default ProductCard
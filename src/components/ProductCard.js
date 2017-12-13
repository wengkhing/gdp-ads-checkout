import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flex from './Flex'
import './ProductCard.scss'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <a className='close'>X</a>
      <Flex column>
        <Flex className="__deal">
          <span>ACTIVE DEAL: 3 for 2 deals</span>
        </Flex>
        <Flex wrap gap={20} row>
          <Flex mSize="100px">
            <img src="http://via.placeholder.com/100x100" />
          </Flex>
          <Flex column grow>
            <h1 className="__title">Classic Ad</h1>
            <p className="__description">Offer the most basic level of advertisement</p>
            <Flex gap={6} row>
              <Flex><button className="button rounded">-</button></Flex>
              <Flex><input className="input-amount" type="text" defaultValue={1} /></Flex>
              <Flex><button className="button rounded">+</button></Flex>
              <Flex><button>Add to cart</button></Flex>
            </Flex>

          </Flex>
          <Flex selfAlign="end">
            <span className="__price">$299.90</span>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default ProductCard
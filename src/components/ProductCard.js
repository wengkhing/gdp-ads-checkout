import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addItem, removeItem, changeItemAmount } from '../actions'

import Flex from './Flex'
import './ProductCard.scss'

class ProductCard extends Component {

  renderDeal() {
    return (
      <Flex className="__deal">
        <span>ACTIVE DEAL: 3 for 2 deals</span>
      </Flex>
    )
  }

  render() {
    const {
      product
    } = this.props

    return (
      <div className='product-card'>
        <a className='close' onClick={() => this.props.removeItem(product.id)}>X</a>
        <Flex column>
          {}
          <Flex wrap gap={20} row>
            <Flex mSize="100px">
              <img src="http://via.placeholder.com/100x100" />
            </Flex>
            <Flex column grow>
              <h1 className="__title">{ product.name }</h1>
              <p className="__description">{ product.description }</p>
              <Flex gap={6} row>
                <Flex>
                  <button className="button rounded"
                    onClick={() => this.props.changeItemAmount(product.id, -1)}>
                    -
                  </button>
                </Flex>
                <Flex><input className="input-amount" type="text" defaultValue={1} /></Flex>
                <Flex>
                  <button className="button rounded"
                    onClick={() => this.props.changeItemAmount(product.id, 1)}>
                    +
                  </button>
                </Flex>
                <Flex><button onClick={() => this.props.addItem(product)}>Add to cart</button></Flex>
              </Flex>

            </Flex>
            <Flex selfAlign="end">
              <span className="__price">${ product.price }</span>
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addItem, removeItem, changeItemAmount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
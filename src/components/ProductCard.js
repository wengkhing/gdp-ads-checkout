import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { addItem, removeItem, changeItemAmount } from '../actions'

import Flex from './Flex'
import './ProductCard.scss'

class ProductCard extends Component {

  state = {
    deal: null,
    in_cart_item: null
  }

  componentWillReceiveProps(new_props) {
    if (new_props.cart && new_props.cart.basket) {
      this.setState({
        in_cart_item: _.find(new_props.cart.basket, { id: this.props.product.id })
      })
    }
  }

  componentDidMount() {
    if (this.props.app && this.props.app.user) {
      this.setState({
        deal: _.find(this.props.app.user.deals, { product_id: this.props.product.id })
      })
    }
  }

  renderDeal() {
    const { deal } = this.state
    if (deal) {
      switch (deal.type) {
        case 'x for y':
          return (
            <Flex className="__deal">
              <span>ACTIVE DEAL: Get a {deal.x} for {deal.y} deal</span>
            </Flex>
          )
        case 'price drop where x or more':
          return (
            <Flex className="__deal">
              <span>ACTIVE DEAL: Price drops to ${deal.new_price/100} where {deal.x} or more are purchased</span>
            </Flex>
          )
      }
    }
  }

  renderAddToCart() {
    const { in_cart_item } = this.state
    const { product } = this.props
    if (!in_cart_item) {
      return (
        <Flex>
          <button className='success-button'
            onClick={() => this.props.addItem(product)}>
            Add to cart
          </button>
        </Flex>
      )
    }
  }

  renderBasketAction() {
    const { in_cart_item } = this.state
    const { product } = this.props
    if (in_cart_item) {
      return (
        <Flex gap={6} row>
          <Flex>
            <button className="button rounded"
              onClick={() => this.props.changeItemAmount(product.id, -1)}>
              -
            </button>
          </Flex>
          <Flex>
            <input
            className="input-amount"
            type="text"
            value={in_cart_item.amount}
            disabled />
          </Flex>
          <Flex>
            <button className="button rounded"
              onClick={() => this.props.changeItemAmount(product.id, 1)}>
              +
            </button>
          </Flex>
          <Flex>
            <button className='danger-button'
              onClick={() => this.props.removeItem(product.id)}>
              Remove from cart
            </button>
          </Flex>
        </Flex>
      )
    }
  }

  renderPrice() {
    const { deal } = this.state
    const { product } = this.props
    if (deal
      && deal.type === 'price drop where x or more'
      && deal.x === 1) {
      return (
        <span className="__price">
          <small><strike>${ product.price / 100 }</strike> </small>
          <span className="success-text">${ deal.new_price / 100 }</span>
        </span>
      )
    } else {
      return <span className="__price">${ product.price / 100 }</span>
    }
  }

  render() {
    const {
      product
    } = this.props

    return (
      <div className='product-card'>
        <Flex column>
          { this.renderDeal() }
          <Flex wrap gap={20} row>
            <Flex mSize="100px">
              <img src="http://via.placeholder.com/100x100" />
            </Flex>
            <Flex column grow>
              <h1 className="__title">{ product.name }</h1>
              <p className="__description">{ product.description }</p>
              { this.renderBasketAction() }
              { this.renderAddToCart() }
            </Flex>
            <Flex selfAlign="end">
              { this.renderPrice() }
            </Flex>
          </Flex>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps({ app, cart }) {
  return { app, cart };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addItem, removeItem, changeItemAmount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
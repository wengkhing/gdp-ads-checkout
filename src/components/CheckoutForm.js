import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Flex from './Flex'
import products from '../data/products'
import './CheckoutForm.scss'

class CheckoutForm extends Component {


  renderItem() {
    return _.map(this.props.cart.basket, item => {
      return (
        <Flex key={item.id} row className='item'>
          <Flex grow className='item__name'>{item.name}</Flex>
          <Flex mSize='70px' className='item__unit'>x{item.amount}</Flex>
          <Flex mSize='90px' className='item__price'>${item.price / 100}</Flex>
        </Flex>
      )
    })
  }

  render() {
    return (
      <Flex column className='checkout-card'>

        <div className='card-header'>
          <h1 className='card-header__title'>
            Your Cart
          </h1>
        </div>

        <div className='card-content'>
          <Flex column className='section-items'>
            { this.renderItem() }
          </Flex>
          <Flex column className='section-total'>
            <Flex row className='subtotal'>
              <Flex grow className='subtotal__label'>Subtotal</Flex>
              <Flex mSize='110px' className='subtotal__value'>${this.props.cart.subtotal / 100}</Flex>
            </Flex>
            <Flex row className='total'>
              <Flex grow className='total__label'>Grand Total</Flex>
              <Flex mSize='110px' className='total__value'>${this.props.cart.grandtotal / 100}</Flex>
            </Flex>
          </Flex>
        </div>

        <div className='card-footer'>
          <button className='card-footer__button'>Checkout</button>
        </div>

      </Flex>
    );
  }
}

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(CheckoutForm);
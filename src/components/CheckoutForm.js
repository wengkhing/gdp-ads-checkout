import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flex from './Flex'
import './CheckoutForm.scss'

class CheckoutForm extends Component {
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
            <Flex row className='item'>
              <Flex grow className='item__name'>Classic Ad</Flex>
              <Flex mSize='70px' className='item__unit'>x1</Flex>
              <Flex mSize='90px' className='item__price'>$299.90</Flex>
            </Flex>
            <Flex row className='item'>
              <Flex grow className='item__name'>Standout Ad</Flex>
              <Flex mSize='70px' className='item__unit'>x2</Flex>
              <Flex mSize='90px' className='item__price'>$579.90</Flex>
            </Flex>
            <Flex row className='item'>
              <Flex grow className='item__name'>Premium Ad</Flex>
              <Flex mSize='70px' className='item__unit'>x3</Flex>
              <Flex mSize='90px' className='item__price'>$1219.90</Flex>
            </Flex>
          </Flex>
          <Flex column className='section-total'>
            <Flex row className='subtotal'>
              <Flex grow className='subtotal__label'>Subtotal</Flex>
              <Flex mSize='110px' className='subtotal__value'>$2219.90</Flex>
            </Flex>
            <Flex row className='total'>
              <Flex grow className='total__label'>Grand Total</Flex>
              <Flex mSize='110px' className='total__value'>$1819.90</Flex>
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

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(CheckoutForm);
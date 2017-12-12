import React, { Component } from 'react'
import { connect } from 'react-redux'
import Flex from './Flex'
import './CheckoutForm.scss'

class CheckoutForm extends Component {
  render() {
    return (
      <div className='checkout-card'>
        <Flex column>

          <div className='card-header'>
            <h1 className='card-header__title'>
              Your Cart
            </h1>
          </div>

          <div className='card-content'>
            <Flex column className='section-items'>
              <Flex row className='item'>
                <Flex grow className='item__name'>Classic Ad</Flex>
                <Flex mSize='70px' className='item__unit'>1 unit(s)</Flex>
                <Flex mSize='90px' className='item__price'>$299.90</Flex>
              </Flex>
              <Flex row className='item'>
                <Flex grow className='item__name'>Standout Ad</Flex>
                <Flex mSize='70px' className='item__unit'>2 unit(s)</Flex>
                <Flex mSize='90px' className='item__price'>$579.90</Flex>
              </Flex>
              <Flex row className='item'>
                <Flex grow className='item__name'>Premium Ad</Flex>
                <Flex mSize='70px' className='item__unit'>3 unit(s)</Flex>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(CheckoutForm);
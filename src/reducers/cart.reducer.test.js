import React from 'react'
import reducer from './cart.reducer'

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT,
  CART_CLEAR
} from '../actions/actionTypes'

import products from '../data/products'

const initialState = {
  basket: [],
  subtotal: 0,
  grandtotal: 0
}

describe('cart reducer', () => {
  let state = initialState

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('[CART_ADD_ITEM] should able to add item', () => {
    state = reducer(state, {
      type: CART_ADD_ITEM,
      payload: products[0]
    })

    expect(state.basket[0]).toEqual({...products[0], amount: 1})
  })

  it('[CART_REMOVE_ITEM] should able to remove item', () => {
    state = reducer(state, {
      type: CART_REMOVE_ITEM,
      payload: products[0].id
    })

    expect(state.basket).toEqual([])
  })

  it('[CART_REMOVE_ITEM] should not break if remove non-existence item', () => {
    state = reducer(state, {
      type: CART_REMOVE_ITEM,
      payload: 'asdfgh'
    })

    expect(state.basket).toEqual([])
  })

  it('[CART_CALCULATE] should able to remove item', () => {
    state = reducer(initialState, {
      type: CART_CALCULATE,
      payload: {
        subtotal: 100,
        grandtotal: 200
      }
    })

    expect(state).toEqual({
      basket: [],
      subtotal: 100,
      grandtotal: 200
    })
  })
})
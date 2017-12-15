import React from 'react'
import reducer from './app.reducer'

import {
  APP_LOGIN,
  APP_LOGOUT,
  PRODUCT_LIST
} from '../actions/actionTypes'

import products from '../data/products'

const initialState = {
  page: '',
  products: {},
  user: null
}

describe('app reducers', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('[APP_LOGIN] should able to login', () => {
    expect(reducer(initialState, {
      type: APP_LOGIN,
      payload: { user_id: 'apple'}
    }).user.id).toEqual('apple')
  })

  it('[APP_LOGIN] should not able to login if user not exist', () => {
    expect(reducer(initialState, {
      type: APP_LOGIN,
      payload: { user_id: 'abc'}
    }).user).toEqual(null)
  })

  it('[APP_LOGOUT] should able to logout', () => {
    expect(reducer(initialState, {
      type: APP_LOGOUT
    }).user).toEqual(null)
  })

  it('[PRODUCT_LIST] should able to logout', () => {
    expect(reducer(initialState, {
      type: PRODUCT_LIST
    }).products).toEqual(products)
  })
})

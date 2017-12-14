import _ from 'lodash'

// Actions
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT
} from './actionTypes'

export function addItem (item) {
  return dispatch => {
    dispatch ({
      type: CART_ADD_ITEM,
      payload: item
    })
  }
}

export function removeItem (item_id) {
  return dispatch => {
    dispatch ({
      type: CART_REMOVE_ITEM,
      payload: item_id
    })
  }
}

export function changeItemAmount (item_id, amount) {
  return (dispatch, getState) => {
    if (_.find(getState().cart.basket, {id: item_id}).amount === 1 && amount === -1) {
      dispatch({
        type: CART_REMOVE_ITEM,
        payload: item_id
      })
    } else {
      dispatch ({
        type: CART_CHANGE_ITEM_AMOUNT,
        payload: { item_id, amount }
      })
    }
  }
}

export function calculate () {
  return dispatch => {
    dispatch ({
      type: CART_CALCULATE
    })
  }
}

export function checkout () {
  return dispatch => {
    dispatch ({
      type: CART_CHECKOUT
    })
  }
}
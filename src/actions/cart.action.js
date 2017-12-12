// Actions
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT
} from './actionTypes'

export function addItem () {
  return dispatch => {
    dispatch ({
      type: CART_ADD_ITEM,
      payload: { item }
    })
  }
}

export function removeItem() {
  return dispatch => {
    dispatch ({
      type: CART_REMOVE_ITEM,
      payload: { item_id }
    })
  }
}

export function changeItemAmount() {
  return dispatch => {
    dispatch ({
      type: CART_CHANGE_ITEM_AMOUNT,
      payload: { item_id, amount }
    })
  }
}

export function calculate() {
  return dispatch => {
    dispatch ({
      type: CART_CALCULATE
    })
  }
}

export function checkout() {
  return dispatch => {
    dispatch ({
      type: CART_CHECKOUT
    })
  }
}
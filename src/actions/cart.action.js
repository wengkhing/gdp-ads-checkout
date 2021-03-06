import _ from 'lodash'
// Actions
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT,
  CART_CLEAR
} from './actionTypes'

export function addItem (item) {
  return dispatch => {
    dispatch ({
      type: CART_ADD_ITEM,
      payload: item
    })
    dispatch(calculate())
  }
}

export function removeItem (item_id) {
  return dispatch => {
    dispatch ({
      type: CART_REMOVE_ITEM,
      payload: item_id
    })
    dispatch(calculate())
  }
}

export function changeItemAmount (item_id, amount) {
  return (dispatch, getState) => {
    const { basket } = getState().cart
    const item = _.find(basket, {id: item_id})

    if (item && item.amount <= 1 && amount === -1) {
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
    dispatch(calculate())
  }
}

export function calculate () {
  return (dispatch, getState) => {
    const { cart, app } = getState()

    const subtotal = _.reduce(cart.basket,
      (sum, item) => sum + (item.price * item.amount), 0)
    const deductions = {};
    const grandtotal = _.reduce(cart.basket,
      (sum, item) => {
        if (app.user) {
          const deal = _.find(app.user.deals, { product_id: item.id })
          if (deal) {
            switch (deal.type) {
              case 'x for y':
                return sum
                  + (Math.floor(item.amount / deal.x) * deal.y * item.price)
                  + (item.amount % deal.x * item.price)
              case 'price drop where x or more':
                if (item.amount >= deal.x)
                  return sum + (deal.new_price * item.amount)
                break;
              default:
            }
          }
        }
        return sum + (item.price * item.amount)
      }, 0)
    dispatch ({
      type: CART_CALCULATE,
      payload: { subtotal, deductions, grandtotal }
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

export function clear() {
  return dispatch => {
    dispatch ({
      type: CART_CLEAR
    })
  }
}
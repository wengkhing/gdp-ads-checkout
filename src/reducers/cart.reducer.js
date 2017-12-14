import _ from 'lodash'

// ActionTypes
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT
} from '../actions/actionTypes'

const initialState = {
  basket: [],
  subtotal: null,
  deductions: {},
  grandtotal: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state,
        basket: _.includes(_.map(state.basket, item => item.id), action.payload.id)
          ? [ ...state.basket ]
          : [ ...state.basket, { ...action.payload, amount: 1 } ]
      }
    case CART_REMOVE_ITEM:
      return { ...state,
        basket: _.remove(state.basket, item => item.id !== action.payload) }
    case CART_CHANGE_ITEM_AMOUNT:
      return { ...state,
        basket: _.map(state.basket, item => item.id === action.payload.item_id
          ? { ...item, amount: item.amount + action.payload.amount }
          : item) }
    case CART_CALCULATE:
      return { ...state,
        subtotal: action.payload.subtotal,
        deductions: action.payload.deductions,
        grandtotal: action.payload.grandtotal
      }
    case CART_CHECKOUT:
      return { ...state, basket: action.payload.item }
    default:
      return state
  }
}

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
  summary: {
    subtotal: null,
    deductions: {},
    grandtotal: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state,
        basket: _.includes(_.map(state.basket, item => item.id), action.payload.id)
          ? [ ...state.basket ]
          : [ ...state.basket, { id: action.payload.id, amount: 1 } ]
      }
    case CART_REMOVE_ITEM:
      return { ...state,
        basket: _.remove(state.basket, item => item.id !== action.payload) }
    case CART_CHANGE_ITEM_AMOUNT:
      return { ...state,
        basket: _.map(state.basket, item => item.id === action.payload.item_id
          ? {id: item.id, amount: item.amount + action.payload.amount}
          : item) }
    case CART_CALCULATE:
      return { ...state, basket: action.payload.item }
    case CART_CHECKOUT:
      return { ...state, basket: action.payload.item }
    default:
      return state
  }
}

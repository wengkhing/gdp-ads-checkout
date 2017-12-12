// ActionTypes
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CHANGE_ITEM_AMOUNT,
  CART_CALCULATE,
  CART_CHECKOUT
} from '../actions/actionTypes'

const initialState = {
  basket: {},
  summary: {
    subtotal: null,
    deductions: {},
    grandtotal: null
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, basket: action.payload.item }
    case CART_REMOVE_ITEM:
      return { ...state, basket: action.payload.item }
    case CART_CHANGE_ITEM_AMOUNT:
      return { ...state, basket: action.payload.item }
    case CART_CALCULATE:
      return { ...state, basket: action.payload.item }
    case CART_CHECKOUT:
      return { ...state, basket: action.payload.item }
    default:
      return state
  }
}

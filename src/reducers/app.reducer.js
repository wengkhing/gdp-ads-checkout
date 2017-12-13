// ActionTypes
import {
  APP_LOGIN,
  PRODUCT_LIST
} from '../actions/actionTypes'

import products from '../data/products'

const initialState = {
  page: '',
  products: [],
  companies: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_LOGIN:
      return { ...state, page: action.payload.page }
    case PRODUCT_LIST:
      return { ...state, ...{ products }}
    default:
      return state
  }
}

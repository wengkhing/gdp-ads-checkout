import _ from 'lodash'

// ActionTypes
import {
  APP_LOGIN,
  APP_LOGOUT,
  PRODUCT_LIST
} from '../actions/actionTypes'

import products from '../data/products'
import users from '../data/companies'

const initialState = {
  page: '',
  products: {},
  user: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_LOGIN:
      return { ...state, user: _.find(users, { id: action.payload.user_id }) }
    case APP_LOGOUT:
      return { ...state, user: null }
    case PRODUCT_LIST:
      return { ...state, ...{ products }}
    default:
      return state
  }
}

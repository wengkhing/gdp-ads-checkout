// Actions
import {
  APP_LOGIN,
  APP_LOGOUT,
  PRODUCT_LIST,
  CART_CLEAR
} from './actionTypes'

export function login (user_id) {
  return dispatch => {
    dispatch({
      type: APP_LOGIN,
      payload: { user_id }
    })
  }
}

export function logout () {
  return dispatch => {
    dispatch({
      type: APP_LOGOUT
    })
    dispatch({
      type: CART_CLEAR
    })
  }
}

export function listProduct () {
  return dispatch => {
    dispatch({
      type: PRODUCT_LIST
    })
  }
}

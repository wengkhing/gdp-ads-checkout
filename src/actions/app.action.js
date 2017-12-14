// Actions
import {
  APP_LOGIN,
  PRODUCT_LIST
} from './actionTypes'

export function listProduct () {
  return dispatch => {
    dispatch({
      type: PRODUCT_LIST
    })
  }
}

// Actions
import {
  APP_LOGIN,
  PRODUCT_LIST
} from './actionTypes'

export function changePage (page) {
  return dispatch => {
    dispatch({
      type: CHANGE_PAGE,
      payload: { page }
    })
    dispatch({
      type: CLEAR_ORDER
    })
  }
}

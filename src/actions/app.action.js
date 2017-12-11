// Actions
import {
  CHANGE_PAGE,
  CLEAR_ORDER
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

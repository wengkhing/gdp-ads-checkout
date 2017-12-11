// ActionTypes
import {
  CHANGE_PAGE
} from '../actions/actionTypes'

const initialState = {
  page: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page: action.payload.page }
    default:
      return state
  }
}

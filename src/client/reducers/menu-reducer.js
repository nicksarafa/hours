import Immutable from 'immutable'
import { CLOSE_MENU, OPEN_MENU } from '../actions/menu-actions'

const initialState = Immutable.Map({
  isOpen: false,
})

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return state.set('isOpen', action.payload)
    case CLOSE_MENU:
      return state.set('isOpen', action.payload)
    default:
      return state
  }
}

export default menuReducer
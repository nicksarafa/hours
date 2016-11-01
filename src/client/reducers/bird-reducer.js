import Immutable from 'immutable'
import { MAKE_TALK } from '../actions/bird-actions'

const initialState = Immutable.Map({
  hasTalked: false,
})

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TALK:
      return state.set('hasTalked', action.payload)
    default:
      return state
  }
}

export default birdReducer
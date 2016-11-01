import { MAKE_TALK } from '../actions/bird-actions'

const initialState = {
  hasTalked: false,
}

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_TALK:
      return { hasTalked: action.payload }
    default:
      return state
  }
}

export default birdReducer
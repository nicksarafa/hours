import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import birdReducer from '../client/reducers/bird-reducer'
import TalkMessage from '../containers/talk-message'
import TalkButton from '../containers/talk-button'

const store = createStore(combineReducers({
  bird: birdReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TalkMessage />
      <TalkButton />
    </div>
  </Provider>
  , document.querySelector('.app')
)
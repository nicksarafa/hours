import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { Provider } from 'react-redux'
import birdReducer from '../client/reducers/bird-reducer'
import TalkMessage from './containers/talk-message'
import TalkButton from './containers/talk-button'

import Navigation from './components/navigation'

const store = createStore(combineReducers({
  bird: birdReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Navigation />
      <TalkMessage />
      <TalkButton />
    </div>
  </Provider>
  , document.querySelector('.app')
)
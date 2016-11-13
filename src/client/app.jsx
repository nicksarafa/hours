/**
 * @name app entry point
 * @description import/combine all the things, including redux reduers here
 * @return client-bundle.js passed to ../dist/index.html for display by DOM
 * @todo remove boiler plate imports/rendered items (currently set to display: none)
 */

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
      <div style={{ display: 'none' }}>
        <TalkMessage />
        <TalkButton />
      </div>
    </div>
  </Provider>
  , document.querySelector('.app')
)
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

import menuReducer from '../client/reducers/menu-reducer'

import Navigation from './components/navigation'

import Post from './components/post'

const store = createStore(combineReducers({
  menu: menuReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Navigation />
      <Post />
    </div>
  </Provider>
  , document.querySelector('.app')
)
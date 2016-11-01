/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

import { createStore } from 'redux'
import { combineReducers } from 'react-immutable'
import { should } from 'chai'
import { describe, it, beforeEach } from 'mocha'
import birdReducer from '../../client/reducers/bird-reducer'
import { makeTalk } from '../../client/actions/bird-actions'

should()
let store

describe('App State', () => {
  describe('Bird', () => {
    beforeEach(() => {
      store = createStore(combineReducers({
        bird: birdReducer,
      }))
    })
    describe('makeTalk', () => {
      it('should make hasTalked go from false to true', () => {
        store.getState().getIn(['bird', 'hasTalked']).should.be.false
        store.dispatch(makeTalk())
        store.getState().getIn(['bird', 'hasTalked']).should.be.true
      })
    })
  })
})
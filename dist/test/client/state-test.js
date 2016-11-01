'use strict';

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _chai = require('chai');

var _mocha = require('mocha');

var _birdReducer = require('../../client/reducers/bird-reducer');

var _birdReducer2 = _interopRequireDefault(_birdReducer);

var _birdActions = require('../../client/actions/bird-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

(0, _chai.should)();
var store = void 0;

(0, _mocha.describe)('App State', function () {
  (0, _mocha.describe)('Bird', function () {
    (0, _mocha.beforeEach)(function () {
      store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)({
        bird: _birdReducer2.default
      }));
    });
    (0, _mocha.describe)('makeTalk', function () {
      (0, _mocha.it)('should make hasTalked go from false to true', function () {
        store.getState().getIn(['bird', 'hasTalked']).should.be.false;
        store.dispatch((0, _birdActions.makeTalk)());
        store.getState().getIn(['bird', 'hasTalked']).should.be.true;
      });
    });
  });
});
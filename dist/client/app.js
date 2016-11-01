'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _reactRedux = require('react-redux');

var _birdReducer = require('../client/reducers/bird-reducer');

var _birdReducer2 = _interopRequireDefault(_birdReducer);

var _talkMessage = require('./containers/talk-message');

var _talkMessage2 = _interopRequireDefault(_talkMessage);

var _talkButton = require('./containers/talk-button');

var _talkButton2 = _interopRequireDefault(_talkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)({
  bird: _birdReducer2.default
}));

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_talkMessage2.default, null),
    _react2.default.createElement(_talkButton2.default, null)
  )
), document.querySelector('.app'));
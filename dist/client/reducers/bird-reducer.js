'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _birdActions = require('../actions/bird-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _immutable2.default.Map({
  hasTalked: false
});

var birdReducer = function birdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _birdActions.MAKE_TALK:
      return state.set('hasTalked', action.payload);
    default:
      return state;
  }
};

exports.default = birdReducer;
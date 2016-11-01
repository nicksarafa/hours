'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTalk = exports.MAKE_TALK = undefined;

var _reduxActions = require('redux-actions');

// define & export action type
var MAKE_TALK = exports.MAKE_TALK = 'MAKE_TALK';

/**
 * define & export action creator
 * action creator triggers MAKE_TALK action called makeTalk
 * includes type, and payload, per Flux Standard Action model
 *
 * redux-actions unlocks shorthand for generating Flux Standard Action model boilerplate
 * action action is the same as the following..
 *
 * export const makeTalk = () => ({
 *   type: MAKE_TALK,
 *   payload: true,
 * })
 */
var makeTalk = exports.makeTalk = (0, _reduxActions.createAction)(MAKE_TALK, function () {
  return true;
});
import { createAction } from 'redux-actions'

// define & export action type
export const MAKE_TALK = 'MAKE_TALK'

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
export const makeTalk = createAction(MAKE_TALK, () => true)
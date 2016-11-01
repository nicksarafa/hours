/* eslint-disable import/prefer-default-export */
// define action type
export const MAKE_TALK = 'MAKE_TALK'

// define action creator
// action creator triggers MAKE_TALK action called makeTalk
// includes type, and payload, per Flux Standard Action model
export const makeTalk = () => ({
  type: MAKE_TALK,
  payload: true,
})
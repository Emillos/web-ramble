import { LOCATION_CHANGE, TASK_TIMERS } from './types';

export const locationChange = (payload) => dispatch => {
  dispatch({type:LOCATION_CHANGE, payload})
}

export const taskTimers = (payload) => dispatch => {
  dispatch({type:TASK_TIMERS, payload})
}
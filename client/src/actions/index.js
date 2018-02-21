export const LOCATION_CHANGE = (payload) => dispatch => {
  dispatch({type:'LOCATION_CHANGE', payload})
}

export const TASK_TIMERS = (payload) => dispatch => {
  dispatch({type:'ADD_POINTS', payload})
  dispatch({type:'TASK_TIMERS', payload})
}

export const SET_ACTIVE_TASK = (payload) => dispatch => {
  dispatch({type:'SET_ACTIVE_TASK', payload})
}


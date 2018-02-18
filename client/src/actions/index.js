export const LOCATION_CHANGE = (payload) => dispatch => {
  dispatch({type:'LOCATION_CHANGE', payload})
}

export const TASK_TIMERS = (payload) => dispatch => {
  console.log(payload, 'payload in actions')
  dispatch({type:'TASK_TIMERS', payload})
}

export const SET_ACTIVE_TASK = (payload) => dispatch => {
  dispatch({type:'SET_ACTIVE_TASK', payload})
}


import { LOCATION_CHANGE } from './types';

export const locationChange = (payload) => dispatch => {
  dispatch({type:LOCATION_CHANGE, payload})
}
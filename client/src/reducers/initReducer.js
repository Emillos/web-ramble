import { LOCATION_CHANGE, TASK_TIMERS } from '../actions/types'

export default function(state = {
	location: 'start',
	points:0,
	energyLevel:1000,
	trivials:{},
	maintenance:{},
	reviews:{},
	projects:{}
}, action){
  switch(action.type){
    case LOCATION_CHANGE:
      return {...state,
        location: action.payload
      };
    case TASK_TIMERS:
      console.log(action.payload, 'payload in reducer');
      return {...state,
        trivials:action.payload.trivials,
        maintenance:action.payload.maintenance,
        reviews:action.payload.reviews,
        projects:action.payload.projects
      }
    default:
      return state;
  }
}
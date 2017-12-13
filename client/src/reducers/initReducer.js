import { LOCATION_CHANGE } from '../actions/types'

export default function(state = {
	location: 'start',
	points:0,
	energyLevel:1000,
	trivials:[],
	maintenance:[],
	reviews:[],
	projects:[]
}, action){
  switch(action.type){
    case LOCATION_CHANGE:
      return {...state,
        location: action.payload
      };
    default:
      return state;
  }
}
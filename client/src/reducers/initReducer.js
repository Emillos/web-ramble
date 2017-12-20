import { LOCATION_CHANGE, TASK_TIMERS } from '../actions/types'

export default function(state = {
	location: 'start',
	points:0,
	energyLevel:1000,
  trivials:{
    name:'Trivials',
    active:false,
    time:2,
    points:10
  },
  maintenence:{
    name:'Maintenence',
    active:false,
    time:6,
    points:30
  },
  reviews:{
    name:'Reviews',
    active:false,
    time:10,
    points:60
  },
  projects:{
    name:'Projects',
    active:false,
    time:30,
    points:100
  }
}, action){
  switch(action.type){
    case LOCATION_CHANGE:
      return {...state,
        location: action.payload
      };
    case TASK_TIMERS:
      console.log(action.payload, 'payload in reducer');
    default:
      return state;
  }
}
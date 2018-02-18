export default function(state = {
	location: 'start',
	points:0,
	energyLevel:1000
}, action){
  switch(action.type){
    case 'LOCATION_CHANGE':
      return {...state,
        location: action.payload
      }
    break
    default:
      return state
  }
}
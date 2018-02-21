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
    case 'ADD_POINTS':
      let addUp = state.points + action.payload.points
      return{...state,
        points:addUp
      }
    default:
      return state
  }
}
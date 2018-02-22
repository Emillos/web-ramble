export default function(state = {
  location: 'start',
  points:0,
  energyLevel:1000,
  bossTimer:300,
  bossInitModd:1000,
  bossLvl:1,
  bossMoodMeter:1000,
  bossInterval:''
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
    case 'ADD_MOOD':
      let newMood = action.payload.mood + state.bossMoodMeter
      return{...state,
        bossMoodMeter:newMood
      }
      break
    case 'BOSS_MOOD':
      return{...state,
        bossMoodMeter:action.value
      }
      break
    default:
      return state
  }
}
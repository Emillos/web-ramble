export default function(state = {
  activeTask: 0,
  timerOn: false,
  interval:'',
  taskList:[
    {
      id:1,
      name:'Trivials',
      active:false,
      time:2,
      initialTime:2,
      points:10,
      mood:2,
    },
    {
      id:2,
      name:'Maintenence',
      active:false,
      time:6,
      initialTime:6,
      points:30,
      mood:7,
    },
    {
      id:3, 
      name:'Reviews',
      active:false,
      time:10,
      initialTime:10,
      points:60,
      mood:12,
    },
    {
      id:4,
      name:'Projects',
      active:false,
      time:30,
      initialTime:30,
      points:100,
      mood:33,
    }
  ]
}, action){
  switch(action.type){
    case 'TASK_TIMERS':
      let updatedTask = [];
      state.taskList.map((task, i) => {
        if (task.id === action.payload.id){
         let updateTheTask =  {...task,
            time:action.payload.time
          }
          updatedTask.push(updateTheTask)
        }
        else{
          updatedTask.push(task)
        }
      })
       return {...state,
          taskList:updatedTask
        }
    break
    case 'SET_ACTIVE_TASK':
      return{...state, 
        activeTask:action.payload.taskId,
        timerOn:true,
        interval:action.payload.interval
      }
      break
    default:
      return state;
  }
}
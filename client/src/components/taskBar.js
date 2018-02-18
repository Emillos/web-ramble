import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TaskBar extends Component{
	taskTimer(taskId){
		if(taskId === undefined){
			taskId = this.props.state.tasks.activeTask
		}
		let oldTime;

		setInterval(function(){ 
			this.props.state.tasks.taskList.map((item, i) => {
				if(item.id === taskId){
					if(item.time === 0){
						oldTime = (item.initialTime + 1)
					}
					else{
						oldTime = item.time
					}
				}			
			})	
			let newTime = (oldTime - 1)

		  let payload = {
		 		id:taskId,
		 		time: newTime
		  }
			this.props.TASK_TIMERS(payload)
		}.bind(this), 1000);
	}
	setTask(taskId){
		console.log(taskId, 'taskID')
		this.props.SET_ACTIVE_TASK(taskId)
		this.taskTimer(taskId)		
	}
	taskCheck(e, taskId){
		if(this.props.state.tasks.activeTask === 0){
			this.setTask(taskId)
		}
	}
	updateTasks(e, taskId){
		this.taskCheck(taskId)
	}
	render(){
		const { taskList } = this.props.state.tasks;
		console.log(this.props, 'task in render')
		return(
			<div id='taskBar'>
				<h5>Tasks</h5>
				{taskList.map((task, i) => {
					return(
						<div key={i} id={task.name} className='taskItem' onClick={(e) => this.taskCheck(e, task.id)}>
							<h6>{task.name}</h6>
							<h6>{task.time +' Sec.'}</h6>
						</div>
					)					
				})}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {state:state}
}

export default connect(mapStateToProps, actions)(TaskBar)
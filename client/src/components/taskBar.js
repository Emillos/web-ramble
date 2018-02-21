import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TaskBar extends Component{
	taskTimer = () => {
		const { activeTask, taskList } = this.props.state.tasks
		let oldTime
		let points = 0

		taskList.map((item, i) => {
			if(item.id === activeTask){
				if(item.time === 0){
					oldTime = (item.initialTime + 1)
					points = item.points
				}
				else{
					oldTime = item.time
				}
			}			
		})	
		let newTime = (oldTime - 1)

	  let payload = {
	  	points,
	 		id:activeTask,
	 		time: newTime
	  }
		this.props.TASK_TIMERS(payload)
	}
	taskCheck(e, taskId){
		clearInterval(this.props.state.tasks.interval)

		let interval = setInterval(this.taskTimer, 1000)
		let payload = {
			taskId,
			interval
		}			
		this.props.SET_ACTIVE_TASK(payload)		
	}
	render(){
		const { taskList } = this.props.state.tasks;
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
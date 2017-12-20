import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TaskBar extends Component{
	initiateTasks(){
//		setTimeout(function(){ console.log(1); }, 1000);
	}
	updateTasks(e, taskValue){
		console.log('clicked! '+ e.target +' which has a value of '+taskValue);
	}
	render(){
		const { trivials, reviews, maintenence, projects } = this.props.state.init;
		const taskLevels = [trivials, maintenence, reviews, projects ];
		return(
			<div id='taskBar'>
				<h5>Tasks</h5>
				{taskLevels.map((task, i) => {
					return(
						<div key={i} className='taskItem' onClick={(e) => this.updateTasks(e, i)}>
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
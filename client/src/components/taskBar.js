import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TaskBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			trivials:{
				active:false,
				time:2,
				points:10
			},
			maintenence:{
				active:false,
				time:6,
				points:30
			},
			reviews:{
				active:false,
				time:10,
				points:60
			},
			projects:{
				active:false,
				time:30,
				points:100
			}
		}
	}
	initiateTasks(){
//		setTimeout(function(){ console.log(1); }, 1000);
	}
	updateTasks(e, taskValue){
		console.log('clicked! '+ e.target +' which has a value of '+taskValue);
	}
	componentDidMount(){
		this.props.taskTimers(this.state)
	}
	render(){
		const { trivials, reviews, maintenence, projects } = this.props.state.init;
		return(
			<div id='taskBar'>
				<h5>Tasks</h5>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 1)}>
					<h6>Trivial</h6>
					<h6>{trivials.time +' Sec.'}</h6>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 2)}>
					<h6>Maintenence</h6>
					<h6>{maintenence.time +' Sec.'}</h6>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 3)}>
					<h6>Reviews</h6>
					<h6>{reviews.time +' Sec.'}</h6>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 4)}>
					<h6>Projects</h6>
					<h6>{projects.time +' Sec.'}</h6>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {state:state}
}

export default connect(mapStateToProps, actions)(TaskBar)
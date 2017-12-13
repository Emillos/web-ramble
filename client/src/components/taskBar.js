import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class TaskBar extends Component{
	createTasks(){
		setInterval(function(){ console.log(1); }, 1000);
		setInterval(function(){ console.log(3); }, 3000);
	}
	updateTasks(e, taskValue){
		console.log('clicked! '+ e.target +' which has a value of '+taskValue);
		console.log(e.target)
	}
	render(){
		return(
			<div id='taskBar'>
				<h5>Tasks</h5>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 1)}>
					<p>Trivial</p>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 2)}>
					<p>Maintenence</p>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 3)}>
					<p>Reviews</p>
				</div>
				<div className='taskItem' onClick={(e) => this.updateTasks(e, 4)}>
					<p>Projects</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {state:state}
}

export default connect(mapStateToProps, actions)(TaskBar)
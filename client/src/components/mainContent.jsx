import React, { Component } from 'react'
import TaskBar from './taskBar'

class MainContent extends Component{
	render(){
		return(
			<div id='mainContent'>
				<TaskBar />
				MainContent
			</div>
		);
	}
}

export default MainContent
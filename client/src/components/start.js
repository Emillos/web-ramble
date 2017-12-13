import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Start extends Component{
	changeLocation(){
		this.props.locationChange('gameArea');
	}
	render(){	
		return(
			<div>
				<button className='flat teal white-text' onClick={(e) => this.changeLocation()}>
					START
				</button>
			</div>
		);
	}
};

function mapStateToProps(state){
	return { state:state }
}

export default connect(mapStateToProps, actions)(Start);
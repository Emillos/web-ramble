import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Start from './start'
import GameContent from './gameContent'
import EndContent from './endContent'

class App extends Component{
	renderContent(){
		// this could be transformed into a switch case
		if(this.props.location === 'start'){
			return <Start />
		}
		else if(this.props.location === 'gameArea'){
			return <GameContent />
		}
		else{
			return <EndContent />			
		}
	}
	render(){
		return(
			<div className='container content'>
				{this.renderContent()}
			</div>
		);
	}
};

function mapStateToProps(state){
	return { location:state.init.location }
}

export default connect(mapStateToProps, actions)(App);
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TopBar extends Component{
  render(){
    return(
      <div id='topBar'>
        <div className='topBarItem'>{'Points: '+this.props.state.init.points}</div>
        <div className='topBarItem'>{'Energy: '+this.props.state.init.energyLevel}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { state:state }
}

export default connect(mapStateToProps, null)(TopBar)
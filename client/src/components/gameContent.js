import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopBar from './topBar'
import MainContent from './mainContent'
import * as actions from '../actions'


class GameContent extends Component{
  render(){
    // console.log(this.props.state, 'state in gamecontent')
    return(
      <div className='contentWrapper'>
        <TopBar />
        <MainContent />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { state:state }
}

export default connect(mapStateToProps, actions)(GameContent)
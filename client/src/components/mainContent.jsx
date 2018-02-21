import React, { Component } from 'react'
import TaskBar from './taskBar'
import Boss from './boss'

class MainContent extends Component{
  render(){
    return(
      <div id='mainContent'>
        <Boss />
        <TaskBar />
        MainContent
      </div>
    );
  }
}

export default MainContent
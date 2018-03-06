import React, { Component } from 'react'
import TaskBar from './taskBar'
import Boss from './boss'
import Coffee from './coffee'

class MainContent extends Component{
  render(){
    return(
      <div id='mainContent'>
        <Boss />
        <TaskBar />
        <Coffee />
        MainContent
      </div>
    );
  }
}

export default MainContent
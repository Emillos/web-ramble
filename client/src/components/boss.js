import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Boss extends Component{
  style(){
    let meterWidth = this.props.state.init.bossMoodMeter / 2
    let bossStyle = {
      width:meterWidth
    }
    return bossStyle
  }
  bossTimer = () => {
    let value = this.props.state.init.bossMoodMeter - this.props.state.init.bossLvl
    this.props.BOSS_MOOD(value)  
  }
  componentDidMount(){
    let interval = setInterval(this.bossTimer, this.props.state.init.bossTimer)
  }
  render(){
    return(
      <div id='boss'>
        <div className='bossMeter' style={this.style()} >
          bossMoodMeter
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{ state }
}

export default connect(mapStateToProps, actions)(Boss)
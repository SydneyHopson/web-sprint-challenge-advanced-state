import React from 'react'
import { connect } from 'react-redux'
import { moveCounterClockwise, moveClockwise } from '../state/action-creators'

 export function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.wheel === 0  ? 'active' : '' }`} style={{ "--i": 0 }}>
          { props.wheel === 2 ? 'B' : null}</div>
        <div className={`cog ${props.wheel === 1  ? 'active' : '' }`}style={{ "--i": 1 }}></div>
        <div className={`cog ${props.wheel === 2  ? 'active' : '' }`}style={{ "--i": 2 }}></div>
        <div className={`cog ${props.wheel === 3  ? 'active' : '' }`}style={{ "--i": 3 }}></div>
        <div className={`cog ${props.wheel === 4  ? 'active' : '' }`}style={{ "--i": 4 }}></div>
        <div className={`cog ${props.wheel === 5  ? 'active' : '' }`}style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={ props.moveCounterClockwise } >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={props.moveClockwise }>Clockwise</button>
      </div>
    </div> 
  )
  
}
const mapStateToProps = state => {
  return {
    wheel: state.wheel
    
  }
}




export default connect(
  mapStateToProps, {moveClockwise, moveCounterClockwise})
  (Wheel);
  

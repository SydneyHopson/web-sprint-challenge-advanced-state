// ❗ You don't need to add extra reducers to achieve MVP

import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'



const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      console.log("im here")
      return state + 1
      break;
    case MOVE_COUNTERCLOCKWISE:
      console.log('here 2')
      return state - 1
       
      
}
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){

  
}
return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){

  }
  return state
}


const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){

  }
  return state
}


const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {

  }
  return state
}


export default combineReducers({ wheel: wheel, quiz: quiz, selectedAnswer: selectedAnswer , infoMessage: infoMessage, form: form })

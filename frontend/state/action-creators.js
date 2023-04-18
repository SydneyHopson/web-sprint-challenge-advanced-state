import axios from "axios"

// ❗ You don't need to add extra action creators to achieve MVP

import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"


export function moveClockwise  (moveClockwise)  {
  return {type: MOVE_CLOCKWISE, payload: moveClockwise }
}

export function moveCounterClockwise(moveCounterClockwise) {
  return {type: MOVE_COUNTERCLOCKWISE, payload: moveCounterClockwise}
 }

export function selectAnswer(selectAnswer) {
  return {type: SET_SELECTED_ANSWER, payload:selectAnswer}
 }

export function setMessage(setMessage) { 
  return {type: SET_INFO_MESSAGE, payload: setMessage}
 }

export function setQuiz(setQuiz) {
  return {type: SET_QUIZ_INTO_STATE, payload: setQuiz}
 }

export function inputChange(inputChange) {
  return {type: INPUT_CHANGE, payload: inputChange}
 }

export function resetForm(resetForm) { 
  return {type: RESET_FORM, payload:resetForm}
 }

// ❗ Async action creators
export function fetchQuiz() {
 
  return function (dispatch) { dispatch(resetForm(true))

    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      console.log(res)
      dispatch(fetchQuiz(res.data.question))
    })
    .catch(err => console.log({err}))
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

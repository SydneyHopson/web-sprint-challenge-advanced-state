import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import * as actionCreators from '../state/action-creators'


export function Form(props) {
  console.log(props)
  useEffect(() => {
    props.fetchQuiz();
  },[])

  const onChange = evt => { 
    // const newQuestion = evt.targe.value
    // setSate({ 
    //   ...state,
    //   question: question
    // })

  }

  const onSubmit = evt => { 
   

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (store) => {
return store
}

export default connect(mapStateToProps, actionCreators)(Form)

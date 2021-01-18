import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Question from "./questions";
import AnswerForm from './answerForm';

const StyledBoard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 96vw;
  margin: 1%;
`

function Board(props) {
  const [popup, setPopup] = useState(false);
  const [question, setQuestion] = useState({})
  const { push } = useHistory;

  function getQuestion(idx) {
    setQuestion(props.questions[idx])
  }

  if (props.questions) {
    return (
      <StyledBoard>
        {props.questions.map((question, index) => {
          return (
          <Question 
            key={index}
            idx={index}
            question={question.question}
            category={question.category.title}
            value={question.value}
            setPopup={setPopup}
            getQuestion={getQuestion}
           /> 
        )})}
        <AnswerForm 
          popup={popup}
          setPopup={setPopup}
          question={question}
        />
      </StyledBoard>
    )
  }
  else return (<div>Loading Board...</div>)
}

export default connect((state)=>{return {questions: state.questions}}, {})(Board);

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
  let history = useHistory;
  if (props.questions) {
    return (
      <StyledBoard>
        {props.questions.map((question, idx) => {
          return (
          <Question 
            key={idx}
            id={idx}
            question={question.question}
            category={question.category.title}
            value={question.value}
            setPopup={setPopup}
           /> 
        )})}
        <AnswerForm 
          popup={popup}
          setPopup={setPopup}
        />
      </StyledBoard>
    )
  }
  else return (<div>Loading Board...</div>)
}

export default connect((state)=>{return {questions: state.questions}}, {})(Board);
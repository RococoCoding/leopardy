import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateScore, updateAnswered } from "../actions/actions";

const StyledForm = styled.form`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  .answer-form {
    visibility: hidden;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: fixed;
    border-radius: 8px;
    top: 0;
    left: 0;
  }
  .in-correct {
    background-color: goldenrod;
    top: 35%;
    left: 35%;
    position: fixed;
    width: 30%;
    border-radius: 8px;
    padding: 2%;
  }
  .answer-input {
    margin-left: 35%;
    margin-top: 10%;
    background-color: goldenrod;
    padding: 2%;
    width: 30%;
    border-radius: 8px;
  }
  input {
    margin: 10% 3% 5% 0;
  }
  .display {
    visibility: visible;
  }
`;

function AnswerForm(props) {
  const [input, setInput] = useState("");
  const [popupType, setPopupType] = useState("q");
  const { popup, question } = props;

  useEffect(() => {
    setPopupType("q");
  }, [question]);

  function changeHandler(e) {
    setInput(e.target.value.trim());
  }
  function submitHandler(e) {
    e.preventDefault();
    setPopupType(false);
    setInput("");
    let regexInput = new RegExp(input, "i");
    let regexResult = question.answer.match(regexInput);
    if (!regexResult || regexResult.input !== regexResult[0]) {
      setPopupType("incorrect");
      props.updateScore(-Number(question.value));
    }
    else {
      setPopupType("correct");
      props.updateScore(Number(question.value));
    }
    props.updateAnswered(props.answered+1)
  }
  return (//styled components class will override custom classes
    //answer-form div is to prevent click on other boxes until answered
    <StyledForm onSubmit={submitHandler}>
      {popupType === "q" &&
        <div className={popup ? "display answer-form" : "answer-form"}>
          <div className="answer-input">
            <label htmlFor="answer">Who is/are... | What is/are...
          <input
                id="answer"
                name="answer"
                type="text"
                value={input}
                onChange={changeHandler}
                placeholder="Type your answer here"
              />
          ?
          </label>
          </div>
        </div>
      }
      {popupType === "correct" &&
        <div className="in-correct">
          "Your answer was correct!"
        </div>
      }
      {popupType === "incorrect" &&
        <div className="in-correct">
          Sorry! The correct answer is: {`${question.answer}`}
        </div>
      }
    </StyledForm>
  );
}
export default connect((state) => { return { score: state.score, answered: state.answered }; }, { updateScore, updateAnswered })(AnswerForm);

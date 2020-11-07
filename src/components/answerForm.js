import React, {useState} from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  .answer-form {
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(0, 0, 255, 0); */
    z-index: 2;
    visibility: hidden;
    position: fixed;
    border-radius: 8px;
    top: 0;
    left: 0;
  }
  .answer-input {
    margin-left: 35%;
    margin-top: 30%;
    width: 30%;
    background-color: goldenrod;
    border-radius: 8px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    padding: 2%;
  }
  input {
    margin: 10% 3% 5% 0;
  }
  .display {
    visibility: visible;
  }
`
export default function AnswerForm(props) {
  const [input, setInput] = useState("");
  const {popup, setPopup} = props;
 
  function changeHandler(e) {
    setInput(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    setPopup(false);
  }
  return (//styled components class will override custom classes
      //answer-form div is to prevent click on other boxes until answered
    <StyledForm onSubmit={submitHandler}>
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
    </StyledForm>
  )
}
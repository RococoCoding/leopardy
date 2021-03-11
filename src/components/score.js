import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const StyledScore = styled.div`
  font-size: 2rem;
  margin-left: 2%;
`;

function Score(props) {
  const { push } = useHistory()
  function endGame() {
    push("/")
  }
  return (
    <StyledScore>
      Score: {props.score}
      <button onClick={endGame}>End Game</button>
    </StyledScore>
  );
}

export default connect((state) => { return { score: state.score }; }, {})(Score);

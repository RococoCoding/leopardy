import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";

const StyledScore = styled.div`
  font-size: 2rem;
  margin-left: 2%;
`


function Score(props) {
  return(
    <StyledScore>
      Score: {props.score}
    </StyledScore>
  )
}

export default connect((state)=>{return {score: state.score}}, {})(Score);

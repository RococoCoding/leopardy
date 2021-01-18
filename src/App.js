import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {loadBoard} from "./actions/actions";
import {Route, Switch, useHistory} from "react-router-dom";
import Board from "./components/board";

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  header {
    text-align: center;
  }
  button {
    margin: 0 auto;
  }
` 

function App(props) {
  let history = useHistory();
  
  return (
    <StyledApp>
      <header><img src="assets/header1.png" alt="Leopardy logo using Jeopardy! font with the J flipped" /></header>
      <Switch>
        <Route path='/round1'>
          <Board round={"round1"}/>
        </Route>
        <Route path='/'>
          <button onClick={()=>{
            history.push('/round1');
            props.loadBoard(50);
          }}>Start Game</button>
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default connect(()=>({}), {loadBoard})(App);

import axios from "axios";
import sampleQuestions from "../data/sampledata";

export const LOAD_BOARD = "LOAD_BOARD";
export const UPDATE_SCORE = "UPDATE_SCORE";

export const loadBoard = (num) => dispatch => {
  // return axios.get(`http://jservice.io/api/random/?count=${num}`)
  //   .then(res=> {
  //     dispatch({type: LOAD_BOARD, payload: res.data});
  //   })
  //   .catch(err=>console.log(err));
  return dispatch({type: LOAD_BOARD, payload: sampleQuestions});
}

export const updateScore = (value) => dispatch => {
  return dispatch({type: UPDATE_SCORE, payload: value});
}

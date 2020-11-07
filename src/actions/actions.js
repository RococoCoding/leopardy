import axios from "axios";

export const LOAD_BOARD = "LOAD_BOARD";
export const NEW_Q = "NEW_QUESTION";

export const loadBoard = (num) => dispatch => {
  return axios.get(`http://jservice.io/api/random/?count=${num}`)
    .then(res=> {
      const action = {type: LOAD_BOARD, payload: res.data}
      dispatch(action);
    })
    .catch(err=>console.log(err));
}

export const newQuestion = value => {
  return {type: NEW_Q, payload: value};
}

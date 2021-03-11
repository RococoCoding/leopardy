import { LOAD_BOARD, UPDATE_SCORE, UPDATE_ANSWERED } from "../actions/actions";

const initialState = {
  questions: [],
  score: 0,
  answered: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOARD:
      //filters out empty questions
      let fullQuestions = action.payload.filter(question => question.question !== ""); 
      //randomize array because api only picks a random spot then sends x number in a row 
      for (let i = fullQuestions.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * i);
        const temp = fullQuestions[i];
        fullQuestions[i] = fullQuestions[j];
        fullQuestions[j] = temp;
      }
      //gets 30 questions for the board (had to load extra from the API because some questions are empty)
      let gameSet = fullQuestions.slice(0, 30);
      return { ...state, score: 0, questions: gameSet };
    case UPDATE_SCORE:
      let new_score = state.score;
      new_score += action.payload;
      return { ...state, score: new_score };
    case UPDATE_ANSWERED:
      return {...state, answered: action.payload}
    default: return state;
  }
};

export default reducer;


  //tried to reproduce show with a diff api, but not all the questions are revealed in a show so that did not work out very well. this is an function to sort the questions for displaying    
      // function filter(array, property) {
      //   return array.reduce(function (acc, obj) { //sorts questions into obj with rounds as keys
      //     let key = obj[property];
      //     if (!acc[key]) {
      //       acc[key] = {questions: [],
      //       categories: [],}
      //     }
      //     acc[key].questions.push(obj); //push objects into a questions array
      //     if (!acc[key].categories.includes(obj.Category)) { //add Category to categories key if it isn't already in there
      //       acc[key].categories.push(obj.Category);
      //     }
      //     return acc;
      //   }, {});
      // };
      // let byRounds = filter(action.payload, "Round");

      // console.log(byRounds)
      // let allQs = [];
      // for (let i in byRounds) { //for each round...
      //   byRounds[i].sort(el=>{

      //   })
      // }

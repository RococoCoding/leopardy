import {NEW_Q, LOAD_BOARD} from "../actions/actions";

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOARD: 
      let fullQuestions = action.payload.filter(question => question.question !== ""); //filters out empty questions
      for(let i = fullQuestions.length - 1; i > 0; i--){ //randomize array because api only picks a random spot then sends x number in a row 
        const j = Math.floor(Math.random() * i);
        const temp = fullQuestions[i];
        fullQuestions[i] = fullQuestions[j];
        fullQuestions[j] = temp;
      }
      let gameSet = fullQuestions.slice(0, 30);
      return {...state, questions: gameSet};
    case NEW_Q: 
      return state;
    default: return state;
  }
}

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
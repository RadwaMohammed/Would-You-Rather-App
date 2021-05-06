import { 
  RECEIVE_QUESTIONS, 
  Add_ANSWER_TO_QUESTION 
} from '../actions/questions';

/**
 * Reducer function <questions>  
 * @param {object} state - The current state
 * @param {object} action - The action that occured
 * @returns {object}  The new state
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case Add_ANSWER_TO_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            // Add the autheUser'id to the votes array of the question's answer
            votes: state[qid][answer].votes.concat([authedUser]) 
          }
        }
      };

    default:
      return state;
    
  }
}

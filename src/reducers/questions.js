import { 
  RECEIVE_QUESTIONS, 
  Add_ANSWER_TO_QUESTION, 
  ADD_QUESTION
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
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            // Add the autheUser'id to the votes array of the question's answer
            votes: state[action.qid][action.answer].votes.concat([action.authedUser]) 
          }
        }
      };
    
      case ADD_QUESTION:
        return {
          ...state,
          [action.question.id]: action.question
        };

    default:
      return state;
    
  }
}

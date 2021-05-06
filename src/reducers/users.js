import { 
  RECEIVE_USERS, 
  ADD_ANSWERED_QUESTION_TO_USER, 
  USER_ADD_QUESTION
} from '../actions/users';


/**
 * Reducer function <users>  
 * @param {object} state - The current state
 * @param {object} action - The action that occured
 * @returns {object}  The new state
 */
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    
    case ADD_ANSWERED_QUESTION_TO_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer // Add the answer key: value - questionId: answer
          } 
        }  
      };
    
    case USER_ADD_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser], // add question to the user created it
          questions: state[action.authedUser].questions.concat([action.qid])
        } 
        
      };
    
    default:
      return state;
  }
}
import { 
  RECEIVE_USERS, 
  Add_ANSWERED_QUESTION_TO_USER 
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
    
    case Add_ANSWERED_QUESTION_TO_USER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer // Add the answer key: value - questionId: answer
          } 
        }  
      };
    default:
      return state;
  }
}
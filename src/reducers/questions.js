import { RECEIVE_QUESTIONS } from '../actions/questions';

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
       
    default:
      return state;
  }
}

import { SET_AUTHED_USER } from '../actions/authedUser';

/**
 * Reducer function <authedUser>  
 * @param {object} state - The current state
 * @param {object} action - The action that occured
 * @returns {object}  The new state
 */
export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
  
}

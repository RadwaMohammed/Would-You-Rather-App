import { getInitialData } from '../utils/api';

// Import the actions creators functions
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

// For only developing code
const AUTHED_ID = 'tylermcginnis';
/**
 * Getting the initial data that the app needs
 * using redux-thunk pattern because we want to make asynchronous request
 */
export function handleInitialData() {
  
  return async dispatch => {
    const { users, questions } = await getInitialData();
    // Add users, questions and authed user to the state of the store
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  }
  
}

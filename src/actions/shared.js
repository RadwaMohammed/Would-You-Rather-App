import { getInitialData } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
// Import the actions creators functions
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

// For only developing code
const AUTHED_ID = null;
/**
 * Getting the initial data that the app needs
 * using redux-thunk pattern because we want to make asynchronous request
 */
export function handleInitialData() {
  
  return async dispatch => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    // Add users, questions and authed user to the state of the store
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
    // After getting all data hide the loading-bar
    dispatch(hideLoading());
  }
  
}

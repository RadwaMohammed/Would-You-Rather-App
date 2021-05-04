import { combineReducers } from 'redux';
// Import the reducers
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';


/*
  Combine authedUser, users and questions reducers into one root reducer
  because the <createStore> function only accepts a single reducer.
*/
export default combineReducers({
  authedUser,
  users,
  questions, 
  loadingBar: loadingBarReducer,
});

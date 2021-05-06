// Variable to hold action type
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWERED_QUESTION_TO_USER = 'ADD_ANSWERED_QUESTION_TO_USER';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';

/**
 * Action creator - receiveUsers
 * @param {object} users - The users slice of the state
 * @returns {object} The action object
 */
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS, // Type of event occured
    users,
  };
}

/**
 * Action creator - addAnsweredQuestionToUser
 * @param {Object} qInfo - question information
 * @param {string} qInfo.authedUser - The authedUder who answer the question
 * @param {strin} qInfo.qid - The question's id
 * @param {string} qInfo.answer - optionOne or optionTwo
 * @returns {object} The action object
 */
export function addAnsweredQuestionToUser({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWERED_QUESTION_TO_USER, // Type of event occured
    authedUser,
    qid,
    answer
  };
}

/**
 * Action creator - userAddQuestion
 * @param {Object} question - question object 
 * @param {string} qInfo.author - The authedUder who create the question
 * @param {strin} qInfo.qid - The question's id
 * @returns {object} The action object
 */
export function userAddQuestion({ author, id }) {
  return {
    type: USER_ADD_QUESTION, // Type of event occured
    authedUser: author,
    qid: id
  };
}
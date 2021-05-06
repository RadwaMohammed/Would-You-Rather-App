// Variable to hold action type
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const Add_ANSWERED_QUESTION_TO_USER = 'Add_ANSWERED_QUESTION_TO_USER';


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
    type: Add_ANSWERED_QUESTION_TO_USER, // Type of event occured
    authedUser,
    qid,
    answer
  };
}
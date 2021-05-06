import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { addAnsweredQuestionToUser, userAddQuestion } from '../actions/users'

// Variable to hold action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const Add_ANSWER_TO_QUESTION = 'Add_ANSWER_TO_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';


/**
 * Action creator - receiveQuestions
 * @param {object} questions - The questions slice of the state
 * @returns {object} The action object
 */
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS, // Type of event occured
    questions,
  };
}

/**
 * Action creator - addAnswerToQuestion
 * @param {Object} qInfo - question information
 * @param {string} qInfo.authedUser - The authedUder who answer the question
 * @param {strin} qInfo.qid - The question's id
 * @param {string} qInfo.answer - optionOne or optionTwo
 * @returns {object} The action object
 */
export function addAnswerToQuestion({ authedUser, qid, answer }) {
  return {
    type: Add_ANSWER_TO_QUESTION, // Type of event occured
    authedUser,
    qid,
    answer
  };
}


// /**
//  * Asynchronous action creator - handleAddAnswer
//  * @param {Object} qInfo - question information
//  * @param {string} qInfo.authedUser - The authedUder who answer the question
//  * @param {strin} qInfo.qid - The question's id
//  * @param {string} qInfo.answer - optionOne or optionTwo 
//  */  
export function handleAddAnswer({ authedUser, qid, answer }) {
  return async dispatch => {
    // Before the request show loading bar
    dispatch(showLoading());
    try {
      await saveQuestionAnswer({ authedUser, qid, answer });
      dispatch(addAnswerToQuestion({ authedUser, qid, answer }));
      dispatch(addAnsweredQuestionToUser({ authedUser, qid, answer }));
      // Finally hide the loading bar
      return dispatch(hideLoading());
    } catch (e) {
      alert('An error occured. Please, try again.');
      return console.warn('Error occured:', e);
    }
  }
} 

/**
 * Action creator - addQuestion
 * @param {object} question - The question object
 * @returns {object} - The action object 
 */
function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

/**
 * Asynchronous action creator - handleAddQuestion
 * @param {Object} question - The question object
 * @param {string} question.optionOneText - The text of the optionOne
 * @param {string} question.optionTwoText - The text of the optionTwo
 * @param {string} question.author - The user's id who creats the question 
 */
export function handleAddQuestion ({ optionOneText, optionTwoText, author }) {
  return async dispatch => {
    // Before the request show loading bar
    dispatch(showLoading());
    try {
      const question = await saveQuestion({
        optionOneText,
        optionTwoText,
        author
      });
      // Add the new question to the store
      dispatch(addQuestion(question));
      dispatch(userAddQuestion(question))
      // Then hide the loading bar
      return dispatch(hideLoading());
    }
    catch (e) {
      alert('An error occured. Please, try again.');
      return console.warn('Error occured:', e);
    }
  }
}

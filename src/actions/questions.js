// Variable to hold action type
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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
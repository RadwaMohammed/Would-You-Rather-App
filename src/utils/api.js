import {
  _getUsers,
  _getQuestions,
  _saveQuestion, 
  _saveQuestionAnswer,
} from './_DATA.js';

// Get the initial data
export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return ({ users, questions });
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}
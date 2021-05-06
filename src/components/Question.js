// Component of question page - path '/questions/:id'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionResults from './QuestionResults';
import ViewQuestion from './ViewQuestion';
import CardWrapper from './CardWrapper';
import NotFound from './NotFound';

class Question extends Component {
  render() {
    const { question ,isAnswered, author, authedUser} = this.props;
    if (author) {
    return ( 
      <CardWrapper author={author}> 
        { 
          isAnswered 
            ? <QuestionResults authedUser={authedUser} question={question} /> 
            : <ViewQuestion  question={question} />
        }
      </CardWrapper>
    )} else {
      return <NotFound />
    }
  }
}

/**
 * The mapStateToProps function - get the state parts that Question component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser 
 * @param {object} state.users - The users object
 * @param {object} state.questions - The questions objct
 * @param {Object} props - The component's ownProps
 * @returns {object} An object containing 
 *                    authedUser {string}
 *                    question {object} 
 *                    author {object} - The user created the question
 *                    isAnswered {boolean} - To indicate if the authedUser 
 *                                           answer the question or not
 */

function mapStateToProps ({ authedUser, users, questions }, props) {
  /*
   * The id of the Question component that is rendering
   * 
   */
  const { id } = props.match.params;
  const userAnsweredQuestionsArr = Object.keys(users[authedUser].answers);
  return {
    authedUser,
    isAnswered: userAnsweredQuestionsArr.includes(id),
    question: questions[id],
    author: questions[id] ? users[questions[id].author] : null
  }
}

/* Using the connect() function to make container component
   to read state from the store
*/
export default connect(mapStateToProps)(Question);
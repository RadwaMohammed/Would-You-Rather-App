// Component of the question card in the home page - path '/'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionDetails from './QuestionDetails';
import CardWrapper from './CardWrapper';

class QuestionCard extends Component {

  render() {
    const { question ,isAnswered, author} = this.props;
    return (
      <CardWrapper author={author}>
        <QuestionDetails 
          isAnswered={isAnswered} 
          question={question} 
        />
      </CardWrapper>
    )
  }
}
/**
 * The mapStateToProps function - get the state parts that QuestionCard component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser 
 * @param {object} state.users - The users object
 * @param {Object} ownProps - The component's ownProps
 * @param {object} ownProps.question - The question's data object
 * @returns {object} An object containing the authedUser {string}
 *                   and question {object} and the question's user (author) {object}
 */
const mapStateToProps = ({ authedUser, users }, { question }) => {
  return {
    authedUser,
    question, 
    author: users[question.author],
  };
};

/* Using the connect() function to make container component
   to read state from the store
*/
export default connect(mapStateToProps)(QuestionCard);






 
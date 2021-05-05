import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import QuestionDetails from './QuestionDetails';

class QuestionCard extends Component {

  render() {
    const { question ,isAnswered, author, authedUser } = this.props;
    return (
      <Card  className="q-card">
        <h3>{author.name} asks:</h3>
        <div className="q-details">
          <Card.Img variant="top" src={author.avatarURL} className="author-img" />
          <QuestionDetails 
            isAnswered={isAnswered} 
            authedUser={authedUser} 
            question={question} 
          />
        </div>
      </Card>
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






 
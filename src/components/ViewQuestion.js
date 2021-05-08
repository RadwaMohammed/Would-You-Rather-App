// Component to view unanswered question (question form)
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { handleAddAnswer } from '../actions/questions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class ViewQuestion extends Component { 
  state = {
    answer: '',
  }

  /**
   * Handle the change on the value of radio element
   * @param {object} e - The event object 
   */
  handleChange = e => {
    // Update the value of 'answer' in the state
    // with the value of the option element
    this.setState({ answer: e.target.value });
  }

  /**
   * Handle the submit of the question form
   * @param {object} e - The event object 
   */
  handleSubmit = e => {
    const { answer } = this.state;
    const { authedUser, question, handleAddAnswer} = this.props;
    const qid = question.id;
    e.preventDefault();
    // Set the authed user in the store with 
    // the authedUser's id that the user has selected
    handleAddAnswer({ authedUser, qid, answer });
  }

  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    const { answer } = this.state;
   
    return (
      <Fragment>
        <Card.Body>
          <Card.Title>Would you rather</Card.Title>
          <Form onSubmit={this.handleSubmit}>
            <Form.Check 
              custom
              type='radio'
              id="option-1"
              label={optionOne.text}
              name="answer"
              value="optionOne"
              checked={this.state.answer === 'optionOne'}
              onChange={this.handleChange}
            />
            <Form.Check 
              custom
              type='radio'
              id="option-2"
              label={optionTwo.text}
              name="answer"
              value="optionTwo"
              checked={this.state.answer === 'optionTwo'}
              onChange={this.handleChange}
            />
            <Button 
              variant="primary" 
              type="submit" 
              disabled={answer === ''} 
            >
              Answer
            </Button>
          </Form>
        </Card.Body>
      </Fragment>
    )
  }
}

/**
 * The mapStateToProps function - get the state parts that ViewQuestion component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser
 * @returns {object} An object containing authedUser {string} 
 */
const mapStateToProps = ({ authedUser }) => ({ authedUser });

/**
 * The mapDispatchToProps function - used for dispatching actions to the store
 * @param {function} dispatch - Call store.dispatch to dispatch an action 
 * @returns {object} An object containing property its value is a function that
 *                   dispatch action returned by action creator <handleAddAnswer>
 */
const mapDispatchToProps = dispatch => ({
  handleAddAnswer: ({ authedUser, qid, answer }) => 
    dispatch(handleAddAnswer({ authedUser, qid, answer }))
});

/* Using the connect() function to make container component
   to read state from the store and dispatch actions
*/
export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion);
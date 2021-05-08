// Component for adding new question
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class NewQuestion extends Component {
  state={
    optionOneText: '',
    optionTwoText: ''
  }

  /**
   * Handle the change on the input text 
   * in the create new question form
   * @param {e} e - event object 
   */
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })
  }

   /**
   * Handle the submit to add new question 
   * @param {object} e - The event object 
   */
  handleSubmit = e => {
    const { optionOneText, optionTwoText } = this.state;
    const { author, handleAddQuestion, history} = this.props;
    e.preventDefault();
    // Add the new question
    handleAddQuestion({ optionOneText, optionTwoText, author });
    // Reset the state
    this.setState({
      optionOneText: '', 
      optionTwoText: ''
    });
    // Go to home page
    history.push('/')
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <Container className="new-q-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <h3>Create New Question</h3>
          <Form.Group>
            <Form.Text className="text-muted">
              Complete the question:
            </Form.Text>
            <Form.Label>Would you rather ...</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Option One Text Here"
              id="optionOneText" 
              value={optionOneText}
              onChange={this.handleChange}
            />
            <p>OR</p>
            <Form.Control 
              type="text" 
              placeholder="Enter Option Two Text Here" 
              id="optionTwoText"
              value={optionTwoText}
              onChange={this.handleChange}
            />
            <Button 
            variant="primary" 
            type="submit"
            disabled={ // Make sure that the user enter text not only white space
              !optionOneText.trim() || !optionTwoText.trim() }
            >
              Submit
            </Button>
          </Form.Group> 
        </Form>
      </Container>
    )
  }
}

/**
 * The mapStateToProps function - get the state parts that NewQuestion component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser
 * @returns {object} An object containing authedUser {string} 
 */
const mapStateToProps = ({ authedUser }) => ({ author: authedUser });

/**
 * The mapDispatchToProps function - used for dispatching actions to the store
 * @param {function} dispatch - Call store.dispatch to dispatch an action 
 * @returns {object} An object containing property its value is a function that
 *                   dispatch action returned by action creator <handleAddQuestion>
 */
const mapDispatchToProps = dispatch => ({
  handleAddQuestion: ({ optionOneText, optionTwoText, author }) => 
    dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
});

/* Using the connect() function to make container component
   to read state from the store and dispatch actions
*/
export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
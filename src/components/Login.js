import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {

  state = {
    authedUserId: '',
  }

  /**
   * Handle the change on the value of the select element
   * @param {object} e - The event object 
   */
  handleChange = e => {
    // Update the <authedUserId> of the state
    // with the value of the select element
    this.setState({authedUserId: e.target.value});
  }

   /**
   * Handle the submit of the login form
   * @param {object} e - The event object 
   */
  handleSubmit = e => {
    const { authedUserId } = this.state;
    e.preventDefault();
    // Set the authed user in the store with 
    // the authedUser's id that the user has selected
    this.props.setAuthedUser(authedUserId);
  }

  render() {
    const { authedUserId } = this.state;
    const { users } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="Form.ControlSelect">
          <Form.Label>Log In</Form.Label>
          <Form.Control 
            as="select" 
            size="lg" 
            value={authedUserId} 
            onChange={this.handleChange}
          >
            <option value="" disabled>Please select a user</option>
            {
              // Loop over the users array to dispaly the users's names
              users.map(user => (<option key={user.id} value={user.id}>
                {user.name}
              </option>))
            }
          </Form.Control>
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit" 
          // To make sure the authedUserId  always not empty
          disabled={authedUserId === ''} 
        >
          Submit
        </Button>
      </Form>
    )
  }
}


/**
 * The mapStateToProps function - get the state parts that App component needs
 * @param {Object} state - The state of the store 
 * @param {object} state.users - The users slice of the state
 * @returns {object} An object containing the users'values array 
 */
const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

/**
 * The mapDispatchToProps function - used for dispatching actions to the store
 * @param {function} dispatch - Call store.dispatch to dispatch an action 
 * @returns {object} An object containing property its value is a function that
 *                   dispatch action returned by action creator <setAuthedUser>
 */

const mapDispatchToProps = dispatch => ({
  setAuthedUser: id => dispatch(setAuthedUser(id))
});

/* Using the connect() function to make container component
   to read state from the store and dispatch actions
*/
export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import NavLinks from './NavLinks';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

class NavMenu extends Component {
  /**
   * Handle log out button
   * to go to login page
   * @param {object} e - The event object
   */
  handleLogout = e => {
    const {setAuthedUser, history} = this.props;
    e.preventDefault();
    // Set the authed user in the store to null
    setAuthedUser(null);
    // Using withRouter component which will pass 
    // all of the router props to the NavMenu component
    // go to '/' path
    history.push('/');
  };
  render() {
    const {users, authedUser } = this.props;
    const currentUser = users[authedUser];
    return (
      <Navbar className="nav-menu">
        <Navbar.Brand className="nav-menu-size">
          {/* Render nav links */}
          <NavLinks />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={currentUser.avatarURL} alt={currentUser.name} className="avatarIcon" />
          <span>{currentUser.name}</span>
          <Button onClick={this.handleLogout}>Log Out</Button>
        </Navbar.Brand>
      </Navbar>
    )
  }
}



/**
 * The mapStateToProps function - get the state parts that NavMenu component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser who logged in
 * @param {object} state.users - The users object
 * @returns {object} An object containing the authedUser's id {string}
 *                   and users {object} containing all the users
 */
const mapStateToProps = ({ authedUser, users}) => {
  return {
    authedUser,
    users
  };
};

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMenu));
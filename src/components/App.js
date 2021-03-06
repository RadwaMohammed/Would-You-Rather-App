import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import MainRouter from './MainRouter';
import Login from './Login';
// Using bootsrap framework
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  componentDidMount() {
    /* When component mounts load the initial data 
       by dispatching the handleInitialData() action creator
    */
    this.props.handleInitialData();
  }

  render() {
    const { isLoading, authedUser } = this.props;
    return isLoading // If the data didn't loaded dispaly the loading bar
      ? <LoadingBar 
          updateTime={200} 
          maxProgress={100} 
          progressIncrease={100} 
          style={{ backgroundImage: 'linear-gradient(to right,#2c3885,#cd9929,#cd9929,#cd9929,#2c3885)', height: '5px' }} 
        />
      : authedUser // If the authed user exist go to MainRouter component else go to login page
        ? <Fragment>
            <LoadingBar 
                updateTime={200} 
                maxProgress={100} 
                progressIncrease={100} 
                style={{ backgroundImage: 'linear-gradient(to right,#2c3885,#cd9929,#cd9929,#cd9929,#2c3885)', height: '5px', zIndex: 1000 }} 
            />
            <MainRouter />
        </Fragment>
      : <Login />
  
       
  }  
}

/**
 * The mapStateToProps function - get the state parts that App component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser
 * @param {object} state.users - The users slice of the state 
 * @returns {object} An object containing the authedUser {string} and
 *                   isLoading {boolean} indicate if the data is loaded
 */
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  isLoading: !Object.keys(users).length,
});

/**
 * The mapDispatchToProps function - used for dispatching actions to the store
 * @param {function} dispatch - Call store.dispatch to dispatch an action 
 * @returns {object} An object containing property its value is a function that
 *                   dispatch action returned by action creator <handleInitialData>
 */

const mapDispatchToProps = dispatch => ({
  handleInitialData: () => dispatch(handleInitialData())
});

/* Using the connect() function to make container component
   to read state from the store and dispatch actions
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);

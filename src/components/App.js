import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
// Using bootsrap framework
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './NavMenu';
import MainRouter from './MainRouter';
import Login from './Login';


class App extends Component {
  
  componentDidMount() {
    /* When component mounts load the initial data 
       by dispatching the handleInitialData() action creator
    */
    this.props.handleInitialData();
  }

  render() {
    return (
      <Container fluid>
        { 
          /* 
           * If the authedUser is not null then display the MainRouter 
           * component else display the Login component 
          */
          this.props.authedUser 
            ? <Router>
                <Fragment>
                  <NavMenu />
                  <Container>
                    <MainRouter />
                  </Container>
                </Fragment>
              </Router>
            : <Router><Route path='/' exact component={Login} /></Router>

        }
      </Container>
    )
  }
}

/**
 * The mapStateToProps function - get the state parts that App component needs
 * @param {Object} state - The state of the store 
 * @param {string} state.authedUser - The authedUser 
 * @returns {object} An object containing the authedUser
 */
const mapStateToProps = ({ authedUser }) => ({
  authedUser
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

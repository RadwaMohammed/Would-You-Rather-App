import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  
  componentDidMount() {
    /* When component mounts load the initial data 
       by dispatching the handleInitialData() action creator
    */
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        Start
      </div>
    )
  }
}

/* Using the connect() function to make container component
   to read state from the store and dispatch actions
*/
export default connect()(App) ;

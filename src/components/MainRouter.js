import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
        </Switch>
      </div>
    )
  }
}

export default MainRouter;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Question from './Question';
import NavMenu from './NavMenu';
import NotFound from './NotFound';
class MainRouter extends Component {
  render() {
    return (
      <Router>
        <NavMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path="/questions/:id" component={Question} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default MainRouter;
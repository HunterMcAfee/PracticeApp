import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/user/Login.js';
import Profile from './components/user/Profile.js';
import Lists from './components/list/Lists.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/user/:userId`} component={Profile} />

        <Route exact path={`/user/:userId/lists`} component={Lists} />
        </div>
      </Router>
    );
  }
}

export default App;

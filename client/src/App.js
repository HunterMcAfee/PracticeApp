import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/user/Login.js';
import Profile from './components/user/Profile.js';
import Lists from './components/list/Lists.js';
import List from './components/list/List';
import CreateList from './components/list/CreateList';
import Todo from './components/todo/Todo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/user/:userId`} component={Profile} />

        <Route exact path={`/user/:userId/createlist`} component={CreateList} />
        <Route exact path={`/user/:userId/lists`} component={Lists} />
        <Route exact path={`/user/:userId/list/:listId`} component={List} />

        <Route exact path={`/user/:userId/list/:listId/todo/:todoId`} component={Todo} />
        </div>
      </Router>
    );
  }
}

export default App;

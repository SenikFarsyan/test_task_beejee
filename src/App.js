import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AllTasks from './components/AllTasks';
import CreateTask from './components/CreateTask';
import EditTask from './components/Edittask';
import SignIn from './components/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={AllTasks} />
              <Route path="/signin" component={SignIn} />
              <Route path="/create" component={CreateTask} />
              <Route path="/edit/:id" component={EditTask} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

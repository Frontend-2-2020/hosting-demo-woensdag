import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Jannicks React Website</h1>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <h2>About</h2>
            </Route>
            <Route path="/">
              <h2>Home</h2>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
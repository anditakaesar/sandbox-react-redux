import React from 'react';
import './App.css';
import '../node_modules/uikit/dist/css/uikit.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ChecklistDemo from './checklist/ChecklistDemo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/pageone">Page One</Link>
            </li>
            <li>
              <Link to="/pagetwo">Page Two</Link>
            </li>
            <li>
              <Link to="/checklist">Checklist Demo</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/pageone">
              <PageOne />
            </Route>
            <Route path="/pagetwo">
              <PageTwo />
            </Route>
            <Route>
              <ChecklistDemo />
            </Route>
          </Switch>
        </main>
      </Router>
    )
  }
}

class PageOne extends React.Component {
  render() {
    return (
      <h1>A PageOne</h1>
    )
  }
}

class PageTwo extends React.Component {
  render() {
    return (
      <h1>A PageTwo</h1>
    )
  }
}

export default App;

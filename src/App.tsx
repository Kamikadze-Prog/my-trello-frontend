import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './pages/App/app.scss';
import Home from './pages/Home/Home';
import Board from './pages/Board/Board';

function App(): JSX.Element {
  return (
    <Router>
      <div className="container">
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

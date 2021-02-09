import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './pages/App/app.scss';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <div className="container">
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/board/board_id">Board</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/board/:board_id">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

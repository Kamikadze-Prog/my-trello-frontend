import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board';
// eslint-disable-next-line import/order
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// eslint-disable-next-line
function Home() :JSX.Element{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/board">Board</Link>
          </li>
        </ul>
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

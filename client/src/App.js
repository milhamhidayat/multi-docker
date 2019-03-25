import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './Otherpage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>This is fib calclator</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;

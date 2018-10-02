import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Start from './containers/start/Start';
import Check from './containers/check/Check.container';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Start} />
          <Route exact path="/check" component={Check} />
        </div>
      </Router>
    );
  }
}

export default App;

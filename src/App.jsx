import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.scss';
import Start from './containers/start/Start';
import Check from './containers/check/Check.container';
import Tour from './containers/tour/Tour.container';
import Result from './containers/result/Result.container';



class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Start} />
          <Route exact path="/check" component={Check} />
          <Route exact path="/tour" component={Tour} />
          <Route exact path="/result" component={Result} />

        </div>
      </Router>
    );
  }
}

export default App;

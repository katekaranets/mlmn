import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import Start from './components/start/Start';
import Tour from './components/tour/Tour';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <ul className="header-navigation">
                <li><Link to='/'>Start</Link></li>
                <li><Link to='/tour'>Tour</Link></li>
              </ul>
            </header>

            <Route exact path="/" component={Start} />
            <Route exact path="/tour" component={Tour} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

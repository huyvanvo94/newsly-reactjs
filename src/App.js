import React, { Component } from 'react';

import {Router, Route, hashHistory} from 'react-router'
import Home from './Home';

class App extends Component {
  render() {
    return (
        <Home/>
    );
  }
}

export default App;

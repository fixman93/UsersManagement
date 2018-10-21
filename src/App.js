import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'
import test from './Pages/test'

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Switch>
        <Route path="/test" component={test} /> 
        <Route path="/" component={Home} /> 
        </Switch>
      </div>
    );
  }
}

export default App

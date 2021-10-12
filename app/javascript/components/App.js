import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path= '/'>
            <Greeting />
            <h1>Home of Champions</h1>            
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App

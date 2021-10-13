import React from "react"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/configStore';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path= '/'>
            <Provider store={store}>
              <Greeting />
            </Provider>       
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App

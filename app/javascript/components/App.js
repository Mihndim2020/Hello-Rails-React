import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/configStore';

const App = () => ( 
  <React.Fragment>
    <Provider store={store}>
      <Router>
        <Switch>          
            <Route exact path="/messages" render={() => <Greeting />} />
        </Switch>
      </Router>
    </Provider>       
  </React.Fragment>  
);

export default App;

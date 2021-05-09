import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Dashboard from './containers/Dashboard'
import CreateAccount from './containers/CreateAccount'
import LogIn from './containers/LogIn'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/createAccount' component={CreateAccount} />
          <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '@/pages/Login';
import About from '@/pages/About';
import Help from '@/pages/Help';

export default (
  <Router>
    <div>
      <Route exact={true} path="/" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/About" component={About} />
      <Route path="/Help" component={Help} />
    </div>
  </Router>
)
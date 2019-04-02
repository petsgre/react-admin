import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from '../App';
import About from '@/pages/About';
import Help from '@/pages/Help';

export default (
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route path="/About" component={About} />
      <Route path="/Help" component={Help} />
    </div>
  </Router>
)
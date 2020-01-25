import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "@/pages/Login";
import About from "@/pages/About";
import Help from "@/pages/Help";
// import PersonalCenter from "@/pages/PersonalCenter";

export default (
  <Router>
    <div>
      <Route exact={true} path="/" component={Login} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/About" component={About} />
      <Route path="/Help" component={Help} />
      {/* <Route path="/personal-center" component={PersonalCenter} /> */}
    </div>
  </Router>
);

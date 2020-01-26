import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@/pages/Container";
import Login from "@/pages/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/" component={Container} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

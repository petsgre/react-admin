import React from "react";
import "./App.css";
import "@/style/index";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@/pages/Container";
import Login from "@/pages/Login";
import Empty from "@/pages/404";
import NoPermission from "@/pages/NoPermission";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/404" component={Empty} />
          <Route path="/no-permission" component={NoPermission} />
          <Route path="/" component={Container} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

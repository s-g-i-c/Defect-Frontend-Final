import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Main from "../MainPanel/Main";

class RoutesMain extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" exact component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default RoutesMain;

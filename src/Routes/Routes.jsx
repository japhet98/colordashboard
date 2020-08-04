import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    );
  }
}

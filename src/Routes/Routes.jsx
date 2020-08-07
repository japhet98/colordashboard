import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/Auth/Login/Login";
import RegisterPage from "../Pages/Auth/Register/Register";
import ForgetPasswordPage from "../Pages/Auth/Forgotpassword/ForgetPassword";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forgetpassword" component={ForgetPasswordPage} />
      </Switch>
    );
  }
}

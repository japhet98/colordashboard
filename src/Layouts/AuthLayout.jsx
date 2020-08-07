// Layout for unAuthenticated User
// Shows only navbar of Login and SignUP

import React, { Component } from "react";
// import NavigationBar from "../Auth/AuthNavbar";

class AuthLayout extends Component {
  render() {
    return (
      <div>
        {/* <NavigationBar /> */}
        {this.props.children}
      </div>
    );
  }
}

export default AuthLayout;

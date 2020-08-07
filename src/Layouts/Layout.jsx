import React, { Component } from "react";
import "./layout.css";
class AppLayout extends Component {
  render() {
    return (
      <div className="container-layout">
        {this.props.children}

        {/* <div className="demo"></div> */}
      </div>
    );
  }
}

export default AppLayout;

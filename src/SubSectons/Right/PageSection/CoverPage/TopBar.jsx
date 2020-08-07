import React, { Component } from "react";
import { BroadCast, User } from "../../../../Layouts/SvgFiles";
import "./topbar.css";
class TopBar extends Component {
  render() {
    return (
      <div
        className="container text-center topbar"
        // style={{ marginLeft: "30px", marginTop: "20px" }}
      >
        <div className="d-flex justify-items-center topbar-item">
          <div className="d-flex align-item-start">
            <BroadCast />
          </div>
          <div className="d-flex align-item-center topbar-item ">
            <b>
              <h6>{this.props.uiname}</h6>
            </b>
          </div>
          <div className="d-flex align-item-end  topbar-item">
            <User />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;

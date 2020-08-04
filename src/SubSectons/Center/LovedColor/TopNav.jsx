import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div>
        <div
          className=" low-opacity "
          style={{
            float: "left",
            boxShadow: "10px 80px 50px 1px lightgray",
            marginTop: "-8px",
          }}
        >
          <label>Color We Have</label>
        </div>
        <div
          className=" low-opacity "
          style={{
            float: "right",
            boxShadow: "10px 80px 50px 1px lightgray",
            marginTop: "-8px",
          }}
        >
          <img
            src="https://img.icons8.com/material-rounded/24/000000/horizontal-settings-mixer.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default TopBar;

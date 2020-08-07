import React, { Component } from "react";
import { BarChart } from "../../../../../Layouts/SvgFiles";
import "./baseright.css";
class BaseRightPanel extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid #290066",
          width: "100px",
          borderRadius: "13px",
          backgroundColor: "lightgray",
          // paddingTop: "50px",
        }}
      >
        <BarChart
          size="4"
          color="#290066"
          height="6"
          width="6"
          // className="basepanel basepanel-right"
        />
      </div>
    );
  }
}

export default BaseRightPanel;

import React, { Component } from "react";
import { BarChart } from "../../../../../Layouts/SvgFiles";

class BasePanel extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid #290066",
          width: "100px",

          borderRadius: "13px",
          backgroundColor: "lightgray",
        }}
      >
        <BarChart
          color="#290066"
          height="6"
          width="6"
          // className="basepanel basepanel-left"
        />
      </div>
    );
  }
}

export default BasePanel;

import React, { Component } from "react";
import {
  BarChart,
  Stopwatch,
  Brightness,
  Envelope,
} from "../../../Layouts/SvgFiles";

class AdjustPage extends Component {
  render() {
    return (
      <>
        <span className="container mx-auto adjust">
          <a href="/" className="adjust-item link">
            <BarChart />
          </a>
          <a href="/" className="adjust-item link">
            <Stopwatch />
          </a>
          <a href="/" className="adjust-item link">
            <Brightness />
          </a>
          <a href="/" className="adjust-item link">
            <Envelope />
          </a>
        </span>
      </>
    );
  }
}

export default AdjustPage;

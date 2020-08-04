import React, { Component } from "react";
import { Toggle } from "../../../../../Layouts/SvgFiles";

class ToggleButton extends Component {
  render() {
    return (
      // <div class>
      <a href="/" className="icon-toggle">
        <Toggle size="2" />
      </a>
      // </div>
    );
  }
}

export default ToggleButton;

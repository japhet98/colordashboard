import React, { Component } from "react";

class PalleteColor extends Component {
  render() {
    return (
      <span
        className="rounded-circle color-section"
        style={{
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size,
          boxShadow: `2px 5px 7px 2px ${this.props.shadowColor}`,
          display: "inline-block",
        }}
      ></span>
    );
  }
}

export default PalleteColor;

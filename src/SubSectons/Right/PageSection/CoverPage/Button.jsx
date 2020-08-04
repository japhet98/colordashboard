import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button type="button" className={this.props.className}>
        Btn
      </button>
    );
  }
}

export default Button;

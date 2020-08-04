import React, { Component } from "react";
import icon from "../../Asset/icons/svg/add-square-button.svg";
import MainComponent from "./MainComponent";
class CreateColor extends Component {
  render() {
    return <MainComponent title="Create New Colors" link="/" icon={icon} />;
  }
}

export default CreateColor;

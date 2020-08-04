import React, { Component } from "react";
import icon from "../../Asset/icons/svg/check-mark.svg";
import MainComponent from "./MainComponent";
class ExplorColor extends Component {
  render() {
    return <MainComponent title="  Explore" link="/" icon={icon} LowOpacity />;
  }
}

export default ExplorColor;

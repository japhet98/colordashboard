import React, { Component } from "react";
import icon from "../../Asset/icons/svg/settings.svg";
import MainComponent from "./MainComponent";
class Settings extends Component {
  render() {
    return <MainComponent title="Settings" link="/" icon={icon} LowOpacity />;
  }
}
export default Settings;

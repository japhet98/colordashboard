import React, { Component } from "react";
import icon from "../../Asset/icons/svg/add-square-button.svg";
import MainComponent from "./MainComponent";
class FavoriteColor extends Component {
  render() {
    return (
      <MainComponent title=" My Favorites" link="/" icon={icon} LowOpacity />
    );
  }
}

export default FavoriteColor;

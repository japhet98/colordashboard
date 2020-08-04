import React, { Component } from "react";
import SideCircle from "../SubSectons/Right/SideCircle";
import MainPage from "../SubSectons/Right/MainPage";

class RightSection extends Component {
  render() {
    return (
      <div className="right-section">
        <SideCircle />
        {/* <div className="clearfix"></div> */}

        <MainPage />
      </div>
    );
  }
}

export default RightSection;

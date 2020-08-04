import React, { Component } from "react";
import StudioSection from "../SubSectons/Left/StudioSecton";
import CreateColor from "../SubSectons/Left/CreateColor";
import ExplorColor from "../SubSectons/Left/Explore";
import FavoriteColor from "../SubSectons/Left/Favorite";
import DownloadApp from "../SubSectons/Left/DownloadApp";
import Settings from "../SubSectons/Left/Settings";
import Logout from "../SubSectons/Left/Logout";

class LeftSection extends Component {
  render() {
    return (
      <div className="left-section">
        <StudioSection />
        <ExplorColor />
        <CreateColor />
        <FavoriteColor />
        <DownloadApp />
        <Settings />
        <Logout />
      </div>
    );
  }
}

export default LeftSection;

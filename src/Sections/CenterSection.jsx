import React, { Component } from "react";
import Navigation from "../SubSectons/Center/Navigation";
import SearchColor from "../SubSectons/Center/Search";
import MainPallete from "../SubSectons/Center/PalleteMainSection";
import LovedColors from "../SubSectons/Center/LovedColorMainSection";

class CenterSection extends Component {
  render() {
    return (
      <div className="center-section">
        <h1>New Colors</h1>
        <div>
          <div className=" text-center">
            <Navigation />
            <SearchColor />
            <MainPallete />
            <LovedColors />
          </div>
        </div>
      </div>
    );
  }
}
export default CenterSection;

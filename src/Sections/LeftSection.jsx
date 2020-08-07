import React, { Component } from "react";
import StudioSection from "../SubSectons/Left/StudioSecton";
import CreateColor from "../SubSectons/Left/CreateColor";
import ExplorColor from "../SubSectons/Left/Explore";
import FavoriteColor from "../SubSectons/Left/Favorite";
import DownloadApp from "../SubSectons/Left/DownloadApp";
import Settings from "../SubSectons/Left/Settings";
import Logout from "../SubSectons/Left/Logout";
import "./leftsection.css";
class LeftSection extends Component {
  render() {
    return (
      <>
        <div className="tablet-mode">
          <div className="left-section">
            <div className="card card-body top-card">
              <div className="row" style={{ width: "100%" }}>
                <div className="col-4" style={{ marginTop: "-20px" }}>
                  {" "}
                  <StudioSection />
                </div>
                <div className="col-4">
                  {" "}
                  <Settings />
                </div>
                <div className="col-4">
                  {" "}
                  <Logout />
                </div>
              </div>
              <div
                className="row"
                style={{ width: "100%", marginTop: "-20px" }}
              >
                <div className="col-4">
                  <ExplorColor />
                </div>
                <div className="col-4">
                  {" "}
                  <CreateColor />
                </div>
                <div className="col-4">
                  {" "}
                  <FavoriteColor />
                </div>
              </div>
            </div>
            <div className="row" style={{ width: "100%" }}>
              <DownloadApp />
            </div>
          </div>
        </div>
        <div className="desktopmobile-mode">
          <div className="left-section">
            <StudioSection />
            <ExplorColor />
            <CreateColor />
            <FavoriteColor />
            <DownloadApp />
            <Settings />
            <Logout />
          </div>
        </div>
      </>
    );
  }
}

export default LeftSection;

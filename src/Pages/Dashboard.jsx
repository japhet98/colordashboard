import React, { Component } from "react";
import AppLayout from "../Layouts/Layout";
import LeftSection from "../Sections/LeftSection";
import CenterSection from "../Sections/CenterSection";
import RightSection from "../Sections/RightSection";
class Dashboard extends Component {
  render() {
    return (
      <AppLayout>
        <div className="desktopmobile-mode">
          <div className="row" style={{ width: "100%" }}>
            <div className="col-lg-2 col-sm-2">
              <LeftSection />
            </div>

            <div className="col-lg-6 col-sm-6">
              {" "}
              <CenterSection />
            </div>

            <div className="col-lg-4 col-sm-4">
              {" "}
              <RightSection />
            </div>
          </div>
        </div>
        <div className="tablet-mode">
          <div className="row">
            {" "}
            <LeftSection />
          </div>
          <div className="row">
            {" "}
            <CenterSection />
          </div>
          <div className="row">
            <RightSection />
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default Dashboard;

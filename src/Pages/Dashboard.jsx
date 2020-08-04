import React, { Component } from "react";
import AppLayout from "../Layouts/Layout";
import LeftSection from "../Sections/LeftSection";
import CenterSection from "../Sections/CenterSection";
import RightSection from "../Sections/RightSection";
class Dashboard extends Component {
  render() {
    return (
      <AppLayout>
        <div className="row mx-auto block" style={{ width: "100%" }}>
          <div className="col-lg-2 col-sm-2">
            <LeftSection />
            <hr className="d-lg-none" style={{ backgroundColor: "blue" }} />
          </div>

          <div className="col-lg-6 col-sm-6">
            {" "}
            <CenterSection />
          </div>
          <hr className="d-lg-none" style={{ backgroundColor: "blue" }} />

          <div className="col-lg-4 col-sm-4">
            {" "}
            <RightSection />
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default Dashboard;

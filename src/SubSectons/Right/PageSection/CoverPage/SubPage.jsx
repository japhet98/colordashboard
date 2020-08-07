import React, { Component } from "react";
import ToggleButton from "./SubCoverPage/Toggle";
import TopLeftPanel from "./SubCoverPage/TopLeft";
import "./subpage.css";
class SubCoverPage extends Component {
  render() {
    return (
      <div className="container text-center">
        <div
          className="card card-body"
          style={{
            borderRadius: "13px",
            marginLeft: "-25px",
            marginRight: "-25px",
            padding: "0px",
            marginTop: "15px",
            boxShadow: "1px 2px 5px lightgray",
            marginBottom: "-10px",
          }}
        >
          <ToggleButton />
          <TopLeftPanel />
        </div>
      </div>
    );
  }
}

export default SubCoverPage;

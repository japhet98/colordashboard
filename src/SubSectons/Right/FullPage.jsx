import React, { Component } from "react";
import PageCover from "./PageSection/PageCover";
import AdjustPage from "./PageSection/AdjustPage";
import "./fullpage.css";
class FullPage extends Component {
  render() {
    return (
      <div
        className="card card-body"
        style={{
          borderRadius: "25px",
          boxShadow: "2px 2px 50px 1px lightgray",
          // marginBottom: "-80px",
        }}
      >
        <PageCover uiname={this.props.uiname} />
        <AdjustPage />
      </div>
    );
  }
}

export default FullPage;

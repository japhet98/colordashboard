import React, { Component } from "react";
import TopBar from "./CoverPage/TopBar";
import SearchPage from "./CoverPage/Search";
import TabList from "./CoverPage/TabList";
import SubCoverPage from "./CoverPage/SubPage";

class PageCover extends Component {
  render() {
    return (
      <div
        className="card card-body pagecover"
        style={{
          marginLeft: "-25px",
          marginTop: "-80px",
          borderRadius: "25px",
          marginRight: "-10px",
          boxShadow: "1px 9px 5px 6px lightgray",
        }}
      >
        <TopBar uiname={this.props.uiname} />
        <SearchPage />
        <TabList />
        <SubCoverPage />
      </div>
    );
  }
}

export default PageCover;

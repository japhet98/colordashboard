import React, { Component } from "react";
import { Circle } from "../../../../../Layouts/SvgFiles";
import telescope from "../../../../../Asset/images/telescop2.png";
import BasePanel from "./Base";
import BaseRightPanel from "./BaseRight";
import "./topleft.css";
class TopLeftPanel extends Component {
  render() {
    return (
      <div style={{ marginLeft: "-55px", marginTop: "20px" }}>
        <div className="row ">
          <div className="col-lg-6 col-sm-4 ">
            <Circle className="list-item-circle" />
          </div>
          <div className="col-lg-6 col-sm-8 list-items-body">
            <div className="card card-body  list-item"></div>
            <div className="card card-body list-item "></div>
            <div className="card card-body list-item "></div>
          </div>
        </div>
        <div>
          <img
            src={telescope}
            alt=""
            className="img-responsive img-fluid telescope"
          />
        </div>

        <div>
          {/* <div className="clearfix"></div> */}
          <div className="basepanel basepanel-left">
            <BasePanel />
          </div>
          {/* <div className="clearfix"></div> */}
          <div className="basepanel basepanel-right">
            <BaseRightPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default TopLeftPanel;

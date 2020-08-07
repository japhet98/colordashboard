import React, { Component } from "react";
import icon from "../../Asset/icons/svg/check-mark.svg";
import add from "../../Asset/icons/svg/plus-sign-in-a-black-circle.svg";
import "./studiosection.css";
class StudioSection extends Component {
  render() {
    return (
      <>
        <div className="tablet-mode">
          <div style={{ marginBottom: "60px", marginLeft: "12px" }}>
            <div
              className=" d-flex align-items-justify"
              style={{ paddingTop: "20px" }}
            >
              <div className="d-flex align-items-start">
                <img src={icon} width="17%" className=" pr-2 " alt="" />
                <h4>
                  <strong>Studio</strong>
                </h4>
                <a
                  href="/"
                  className="d-flex align-items-end"
                  style={{ marginLeft: "50px", marginTop: "7px" }}
                >
                  <img src={add} width="20px" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="desktopmobile-mode">
          <div style={{ marginBottom: "70px", marginLeft: "12px" }}>
            <div
              className=" d-flex align-items-justify"
              style={{ paddingTop: "50px" }}
            >
              {/* <div className="col-lg-8 col-sm-8"> */}
              <div className="d-flex align-items-start">
                <img src={icon} width="17%" className=" pr-2 " alt="" />
                <h4>
                  <strong>Studio</strong>
                </h4>
                <a
                  href="/"
                  className="d-flex align-items-end"
                  style={{ marginLeft: "100px", marginTop: "7px" }}
                >
                  <img src={add} width="20px" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StudioSection;

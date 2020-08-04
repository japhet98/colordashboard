import React, { Component } from "react";
import icon from "../../Asset/icons/svg/sign-out-option.svg";
import profile from "../../Asset/images/profile.jpg";
// import MainComponent from "./MainComponent";
class Logout extends Component {
  render() {
    return (
      <>
        {/* // <MainComponent title="Logout" link="/" icon={icon} LowOpacity /> */}
        <div className="container section-component">
          <div className=" d-flex align-items-justify ">
            {/* <div className="col-lg-8 col-sm-8"> */}
            <div className="d-flex align-items-start ">
              <img
                src={icon}
                width="15%"
                className="low-opacity pr-2 "
                alt=""
              />
              <label className="low-opacity ">
                <b>Logout</b>
              </label>

              <a
                href="/"
                className="d-flex align-items-end "
                style={{ marginLeft: "90px", marginTop: "7px" }}
              >
                <img
                  src={profile}
                  width="30px"
                  alt=""
                  className="rounded-circle"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Logout;

import React, { Component } from "react";
import TopBar from "./LovedColor/TopNav";
import MainHero from "./LovedColor/MainHeroBody";

class LovedColors extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div
            className="card card-body"
            style={{
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              boxShadow: "0px 0px 20px 1px lightgray",
              // marginBottom: "-30px",
              //   marginBottom: "10px",
              paddingBottom: "50px",
            }}
          >
            <TopBar />
            <MainHero />
          </div>
        </div>
      </>
    );
  }
}

export default LovedColors;

import React, { Component } from "react";
import TopBar from "./LovedColor/TopNav";
import MainHero from "./LovedColor/MainHeroBody";

class LovedColors extends Component {
  render() {
    return (
      <>
        {/* <div className="container"> */}
        <div className="card card-body lovedcolor-main">
          <TopBar />
          <MainHero />
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default LovedColors;

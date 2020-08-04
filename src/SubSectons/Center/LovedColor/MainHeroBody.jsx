import React, { Component } from "react";
import Hero from "./Hero";
import BodyRight from "./BodyRight";

class MainHero extends Component {
  render() {
    return (
      <>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-6 col-sm-6">
            <Hero />
          </div>
          <div className="col-lg-6 col-sm-6">
            <BodyRight />
          </div>
          <a
            href="/"
            className="see-all"
            style={{
              textDecoration: "none",
              color: "#3d0099",
            }}
          >
            <small> See all{" >"}</small>
          </a>
        </div>
      </>
    );
  }
}

export default MainHero;

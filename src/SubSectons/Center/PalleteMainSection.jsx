import React, { Component } from "react";
import TopBar from "./Pallete/Topnav";
import Palletes from "./Pallete/Palletes";
import "./PalleteMain/index.css";
class MainPallete extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "30px" }}
      >
        <div
          className="card card-body mx-auto text-center "
          style={{
            borderRadius: "16px",
            boxShadow: "10px 80px 50px 1px lightgray",
          }}
        >
          <TopBar />
          <Palletes />
        </div>
      </div>
    );
  }
}

export default MainPallete;

import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div
        className="card card-body hero-center"
        style={{
          backgroundColor: "#3d0099",
          width: "100%",
          marginRight: "0px",

          borderRadius: "16px",
          // marginLeft: "-40px",
          marginBottom: "0px",
        }}
      >
        <div className="text-center container">
          <div
            style={{
              float: "left",
              color: "white",
            }}
          >
            <small>
              <h6>Minimal Interface</h6>
              <p>Some paragraph content</p>
            </small>
          </div>
          <div style={{ float: "right", opacity: "0.9", marginRight: "-20px" }}>
            <div className="container">
              <span
                className="rounded-circle"
                style={{
                  backgroundColor: "orange",
                  width: "40px",
                  height: "40px",
                  display: "inline-block",
                }}
              >
                {" "}
                <span
                  className="rounded-circle"
                  style={{
                    backgroundColor: "yellow",
                    width: "40px",
                    height: "40px",
                    marginTop: "20px",
                    display: "inline-block",
                  }}
                ></span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;

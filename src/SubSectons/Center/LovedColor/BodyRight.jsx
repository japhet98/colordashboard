import React, { Component } from "react";

class BodyRight extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="card card-body mx-auto"
          style={{
            backgroundColor: "white",

            border: "none",
          }}
        >
          <div className="row">
            <div>
              <h5>Hero Concept</h5>
              <p>Something Color</p>
            </div>
            <div>
              <div className="container">
                <span
                  className="rounded-circle"
                  style={{
                    backgroundColor: "lightblue",
                    width: "40px",
                    height: "40px",
                    display: "inline-block",
                  }}
                >
                  <span
                    className="rounded-circle"
                    style={{
                      backgroundColor: "blue",
                      width: "40px",
                      height: "40px",
                      marginTop: "20px",
                      display: "inline-block",
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyRight;

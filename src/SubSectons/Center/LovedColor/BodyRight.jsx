import React, { Component } from "react";

class BodyRight extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="card card-body mx-auto"
          style={{
            backgroundColor: "white",
            width: "100%",
            marginLeft: "0px",
            border: "none",
            marginBottom: "0px",
          }}
        >
          <div>
            <div style={{ float: "left" }}>
              <h5>Hero Concept</h5>
              <p>Something Color</p>
            </div>
            <div style={{ float: "right", opacity: "0.7" }} className="s-only">
              <div className="container">
                <span
                  className="rounded-circle"
                  style={{
                    backgroundColor: "lightblue",
                    width: "40px",
                    height: "40px",

                    display: "inline-block",
                    //   marginTop: "-10px",
                  }}
                >
                  <span
                    className="rounded-circle"
                    style={{
                      backgroundColor: "blue",
                      width: "40px",
                      height: "40px",
                      // marginLeft: "3px",
                      marginTop: "20px",
                      // boxShadow: `2px 5px 7px 2px lightgray`,
                      display: "inline-block",
                    }}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default BodyRight;

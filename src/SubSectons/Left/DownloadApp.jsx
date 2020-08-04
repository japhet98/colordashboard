import React, { Component } from "react";
import { Smile } from "../../Layouts/SvgFiles";

class DownloadApp extends Component {
  render() {
    return (
      <div
        className="container well"
        style={{ marginLeft: "7px", marginBottom: "60px", marginTop: "60px" }}
      >
        <div
          className="card card-body bg-light well"
          style={{ width: "12rem", height: "auto" }}
        >
          <div className="mx-auto img-fluid smile">
            <Smile />
          </div>

          <p
            className="text-center"
            style={{ color: "#1f004d", opacity: "0.8" }}
          >
            Create, Save and share perfect palletes in secondes
          </p>
          <a
            href="/"
            className="btn btn-primary"
            style={{
              borderRadius: "14px",
              marginBottom: "25px",
              marginTop: "10px",
              padding: "4px",
              backgroundColor: "#4700b3",
              borderColor: "#4700b3",
            }}
          >
            Download App
          </a>
        </div>
      </div>
    );
  }
}

export default DownloadApp;

import React, { Component } from "react";
import "./topnav.css";
class TopBar extends Component {
  render() {
    return (
      <div className="container pallet-nav" style={{ marginTop: "-20px" }}>
        <nav className="navbar navbar-expand-lg navbar-light text-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav1"
            aria-controls="navbarNav1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav1">
            <ul className="nav nav-pills navbar navbar-expand-lg navbar-light text-center">
              <li className="nav-item pr-4">
                <a
                  href="/"
                  className="nav-link "
                  style={{ borderBottom: "solid", color: "#5200cc" }}
                >
                  Active
                </a>
              </li>

              <li className="nav-item ">
                <a href="/" className="nav-link low-opacity">
                  Toggle::
                </a>
              </li>

              <li className="nav-item  ">
                <a href="/" className="nav-link low-opacity">
                  Disabled
                </a>
              </li>

              <button
                className="btn nav-item s-only low-opacity"
                type="button"
                style={{
                  color: "black",
                  borderRadius: "14px",
                  borderColor: "lightgray",
                  backgroundColor: "lightgray",
                  borderStyle: "hidden",
                  boxShadow: "revert",
                }}
              >
                <a href="/" className="nav-link" style={{ padding: "2px" }}>
                  Disabled
                </a>
              </button>

              {/* </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;

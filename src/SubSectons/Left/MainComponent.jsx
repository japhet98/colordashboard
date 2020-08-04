import React, { Component } from "react";

class MainComponent extends Component {
  render() {
    return (
      <div className="container section-component">
        <div className="row d-flex align-items-justify">
          <div className="col-lg-12 col-sm-12">
            <div
              className="d-flex align-items-start"
              style={this.props.LowOpacity ? { opacity: "0.5" } : {}}
            >
              <img
                src={this.props.icon}
                width="16%"
                className=" pr-3 "
                alt=""
              />

              <label>
                <a
                  href={this.props.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b> {this.props.title}</b>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;

import React, { Component } from "react";
import { ArrowLeft, ArrowRight } from "../../../Layouts/SvgFiles";

class Pagination extends Component {
  render() {
    return (
      <div
        className="container text-center"
        // style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <a href="/" className="link">
          <ArrowLeft />
        </a>
        <a href="/" className="link">
          <b>
            {" "}
            <ArrowRight />
          </b>
        </a>
      </div>
    );
  }
}

export default Pagination;

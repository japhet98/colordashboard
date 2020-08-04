import React, { Component } from "react";
import { Camera, Search } from "../../Layouts/SvgFiles";

class SearchColor extends Component {
  render() {
    return (
      <div className="container ">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                borderTopLeftRadius: "13px",
                borderBottomLeftRadius: "13px",
                borderLeft: "none",
                borderColor: "white",
                textDecoration: "none",
                paddingBottom: "4px",
                borderWidth: "50%",
              }}
            >
              <Camera />
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center mx-auto responsive"
            placeholder="Search Color Here"
            aria-label=""
            aria-describedby="basic-addon1"
            style={{
              backgroundColor: "white",
              color: "black",

              borderLeft: "none",
              borderColor: "white",
            }}
          />
          <div className="input-group-append">
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                borderTopRightRadius: "13px",
                borderBottomRightRadius: "13px",
                borderLeft: "none",
                borderColor: "white",
                textDecoration: "none",
              }}
            >
              <Search />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchColor;

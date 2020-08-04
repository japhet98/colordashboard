import React, { Component } from "react";
import { Search } from "../../../../Layouts/SvgFiles";

class SearchPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control text-center mx-auto responsive"
            placeholder="Search Here"
            aria-label=""
            aria-describedby="basic-addon1"
            style={{
              backgroundColor: "lightgray",
              color: "black",
              borderTopLeftRadius: "13px",
              borderBottomLeftRadius: "13px",
              borderColor: "gray",
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
                borderColor: "gray",
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

export default SearchPage;

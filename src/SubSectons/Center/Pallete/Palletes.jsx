import React, { Component } from "react";
import { Color } from "../../../Data/Color";
import PalleteColor from "./Color";
import Pagination from "./Pagination";
import { Dot } from "../../../Layouts/SvgFiles";
class Palletes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5,
    };
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts =
      Color && Color.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    return (
      <>
        <div className="  text-center collor-pallettes">
          {currentPosts &&
            currentPosts.map((e) => (
              <PalleteColor
                key={e.id}
                color={e.color}
                size={e.size}
                shadowColor={e.shadow}
              />
            ))}
        </div>
        <div
          style={{
            marginTop: "5px",
            marginBottom: "-20px",
            marginLeft: "0px",
            // marginRight: "-50px",
          }}
          className="d-flex justifiy-items-center"
        >
          <Pagination
            postsPerPage={this.state.postsPerPage}
            totalPosts={Color ? Color.length : 0}
            paginate={paginate}
            pageTab={<Dot />}
          />
        </div>
      </>
    );
  }
}

export default Palletes;

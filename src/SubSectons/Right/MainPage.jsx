import React, { Component } from "react";
import FullPage from "./FullPage";
import StaticPage from "./StaticPage";
// import Pagination from "./PageSection/Paginate";
import { ArrowLeft, ArrowRight } from "../../Layouts/SvgFiles";
import Pagination from "../Center/Pallete/Pagination";
import SideCircle from "./SideCircle";
import "./mainpage.css";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 1,
    };
  }
  render() {
    const pages = [
      <FullPage uiname="Live UI Kit Demo" />,
      <FullPage uiname="Hello World" />,
      // <FullPage />,
      // <FullPage />,
      // <FullPage />,
    ];
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts =
      pages && pages.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    let i = 1;
    return (
      <div className="container mainpage">
        <div className="row">
          <div className="col-lg-9 col-sm 9">
            <SideCircle />
            {currentPosts &&
              currentPosts.map((e) => <span key={i++}>{e}</span>)}
          </div>
          <div className="col-lg-3 col-sm 3 d-none d-lg-block">
            <StaticPage />
          </div>
          <div
            className="desktopmobile-mode"
            style={{
              marginBottom: "-8px",
              marginTop: "5px",
              marginLeft: "270px",
            }}
          >
            <Pagination
              adonClass=" text-center"
              postsPerPage={this.state.postsPerPage}
              totalPosts={pages ? pages.length : 0}
              paginate={paginate}
              pageTab={<ArrowRight />}
              altTab={<ArrowLeft />}
            />
          </div>
        </div>
        <div
          className="tablet-mode"
          style={{
            marginBottom: "-8px",
            marginTop: "5px",
            marginRight: "270px",
          }}
        >
          <Pagination
            adonClass=" text-center"
            postsPerPage={this.state.postsPerPage}
            totalPosts={pages ? pages.length : 0}
            paginate={paginate}
            pageTab={<ArrowRight />}
            altTab={<ArrowLeft />}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;

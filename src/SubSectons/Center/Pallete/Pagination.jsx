import React from "react";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  lnk,
  pageTab,
  altTab,
  style,
  adonClass,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav className={`mx-auto Page navigation ${adonClass}`} style={style}>
        <ul className="pagination  justify-content-end" active="true">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href={lnk}
                className="page-link"
                style={{ border: "none" }}
              >
                <b>{altTab ? (number > 1 ? pageTab : altTab) : pageTab}</b>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;

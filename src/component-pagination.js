import React from "react";

const _ = require("lodash");

const Pagination = (props) => {
  const { itemCounts, pageSize, setCurrentPageHandle, currentPage } = props;
  const numOfPages = itemCounts / pageSize;
  const pages = _.range(1, numOfPages + 1);

  // exit pagination
  if (numOfPages <= 1) return null;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">


          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentPageHandle(page)}
              >
                {page}
              </a>
            </li>
          ))}


        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

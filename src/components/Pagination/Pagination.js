import React, { useContext } from "react";

import { StoreContext } from "../../StoreContext";

const Pagination = () => {
  const {posts, postsPerPage, paginate} = useContext(StoreContext);
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

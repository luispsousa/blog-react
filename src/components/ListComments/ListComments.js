import React, { useContext } from 'react'

import { StoreContext } from "../../StoreContext";

const ListComments = () => {
  const { comments } = useContext(StoreContext);
  const [comment, setComments] = comments;
  
  const handleRemoveComment = (e) => {
    console.log(e.target.parentNode.textContent);
  }
  
  return (
    <ul>
      {comment.map((item, i) => {
        return (
          <li className="mt-3" key={i}>
            {item}
            <button
              className="btn btn-danger ml-2"
              onClick={handleRemoveComment}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListComments;

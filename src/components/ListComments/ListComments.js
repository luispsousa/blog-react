import React, { useContext } from 'react'

import { StoreContext } from "../../StoreContext";

const ListComments = () => {
  const { comments } = useContext(StoreContext);
  const [comment, setComments] = comments;
  
  const handleRemoveComment = (e) => {
    const index = e.target.getAttribute('data-index');
    const newArray = [...comment];
    newArray.splice(index, 1);
    setComments(newArray);
  }
  
  return (
    <ul>
      {comment.map((item, i) => {
        return (
          <li className="mt-3" key={i}>
            {item}
            <button
              data-index={i}
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

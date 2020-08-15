import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { StoreContext } from "../../StoreContext";

const PostCard = () => {
  const {loading, currentPosts} = useContext(StoreContext);
  
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {currentPosts.map((post) => {
        return (
          <li 
            key={post.id} 
            className="list-group-item "
          >
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
          );
      })}
    </ul>
  );
};

export default PostCard;

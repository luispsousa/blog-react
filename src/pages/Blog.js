import React from 'react';

/* Components */
import PostList from "../components/PostList/PostList";
import Pagination from '../components/Pagination/Pagination';

const Blog = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Welcome to My Blog</h1>
      <PostList />
      <Pagination />
    </div>
  );
}

export default Blog;

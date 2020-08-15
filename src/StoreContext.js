import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [comments, setComments] = useState([
    'comment 1', 'comment 2'
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  /* Get current posts */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  /* Change page */
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <StoreContext.Provider 
      value={
        {
          posts, 
          loading,
          postsPerPage,
          currentPosts,
          paginate,
          comments: [comments, setComments],
        }
      }
    >
      {children}
    </StoreContext.Provider>
  );
}

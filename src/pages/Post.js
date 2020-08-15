import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Comments from '../components/Comments/Comments';

const Post = ({match}) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.postId}`);
      setPost(res.data);
      setLoading(false);
    };

    fetchPost();
  }, [match.params.postId]);

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">{post.title}</h1>
      <p className="mt-5">Post id: {post.id}</p>
      <p>{post.body}</p>
      <Comments />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Post;

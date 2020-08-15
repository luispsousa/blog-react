import React, { useContext, useState } from 'react';

import { StoreContext } from "../../StoreContext";

const AddComment = () => {
  const [inputValue, setInputValue] = useState('');
  const {comments} = useContext(StoreContext);
  const [comment, setComments] = comments;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments(prevComments => [...prevComments, inputValue]);
    setInputValue('');
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={inputValue} onChange={handleChange} cols="80" rows="5" />
        <input className="btn btn-primary d-block" type="submit"/>
      </form>
    </div>
  );
}

export default AddComment;

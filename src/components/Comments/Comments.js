import React from 'react';

import AddComment from '../AddComment/AddComment';
import ListComments from '../ListComments/ListComments';

const Comments = () => {
  return (
    <div>
      <h3>Comments</h3>
      <AddComment />
      <ListComments />
    </div>
  );
}

export default Comments;

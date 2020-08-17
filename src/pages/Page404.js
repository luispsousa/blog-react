import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <h1>Ups... Wrong page :\!</h1>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default Page404;

import React from "react";
import { imageURL } from "./apiLinks";

const Movie = ({ movie, id }) => {
  return (
    <div className='movie'>
      <p>{movie.original_title}</p>
      <img
        className='movie-poster'
        src={`${imageURL}${movie.poster_path}`}
        alt=''
      />
    </div>
  );
};

export default Movie;

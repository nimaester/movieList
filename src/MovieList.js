import React, { useEffect } from "react";
import Movie from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "./actions/movieActions";

const MovieList = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, nowPlaying } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <section>
      {nowPlaying.length > 0 && (
        <div>
          <h1>Popular</h1>
          {popular.map((movie) => (
            <div className='movie-list'>
              <Movie movie={movie} key={movie.id} id={movie.id} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MovieList;

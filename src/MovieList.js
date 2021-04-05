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
          <div className='movies'>
            <h1 className='movie-type'>Now Playing</h1>
            <div className='movie-list'>
              {nowPlaying.slice(0, 6).map((movie) => (
                <div className='movie-list'>
                  <Movie movie={movie} key={movie.id} id={movie.id} />
                </div>
              ))}
            </div>
          </div>

          <div className='movies'>
            <h1 className='movie-type'>Upcoming Movies</h1>
            <div className='movie-list'>
              {upcoming.slice(0, 6).map((movie) => (
                <div className='movie-list'>
                  <Movie movie={movie} key={movie.id} id={movie.id} />
                </div>
              ))}
            </div>
          </div>

          <div className='movies'>
            <h1 className='movie-type'>Popular Movies</h1>
            <div className='movie-list'>
              {popular.slice(0, 6).map((movie) => (
                <div className='movie-list'>
                  <Movie movie={movie} key={movie.id} id={movie.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieList;

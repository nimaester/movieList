import React, { useEffect } from "react";
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
          <h1>hi</h1>
        </div>
      )}
    </section>
  );
};

export default MovieList;

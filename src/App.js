import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "./actions/movieActions";

const App = () => {
  const dispatch = useDispatch();
  const { popular, upcoming, nowPlaying } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className='App'>
      {true && (
        <div>
          <h1>hi</h1>
        </div>
      )}
    </div>
  );
};

export default App;

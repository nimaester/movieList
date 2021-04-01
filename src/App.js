import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  let imageURL = "https://image.tmdb.org/t/p/w1280";
  let searchURL = `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_API}&query=`;

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((data) => {
        setMovies(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      {movies.length > 0 && (
        <div>
          <h1>{movies[0].original_title}</h1>
          <img src={`${imageURL}${movies[0].poster_path}`} alt='' />
        </div>
      )}
    </div>
  );
};

export default App;

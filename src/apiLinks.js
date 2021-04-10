export const imageURL = "https://image.tmdb.org/t/p/w1280";
export const searchURL = () =>
  `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_API}&query=`;
export const popularURL = () =>
  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
export const upcomingMoviesURL = () =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`;
export const nowPlayingURL = () =>
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`;

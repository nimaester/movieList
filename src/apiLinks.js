let imageURL = "https://image.tmdb.org/t/p/w1280";
let searchURL = `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_API}&query=`;
let popularURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

import axios from "axios";
import { popularURL, upcomingMoviesURL, nowPlayingURL } from "../apiLinks.js";

export const getMovies = () => async (dispatch) => {
  const popularMoviesData = await axios.get(popularURL());
  const upcomingMoviesData = await axios.get(upcomingMoviesURL());
  const nowPlayingData = await axios.get(nowPlayingURL());

  dispatch({
    type: "GET_MOVIES",
    payload: {
      popular: popularMoviesData.data.results,
      upcoming: upcomingMoviesData.data.results,
      nowPlaying: nowPlayingData.data.results,
    },
  });
};

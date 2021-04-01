const initState = {
  popular: [],
  upcoming: [],
  nowPlaying: [],
  searched: {},
};

const movieReducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        nowPlaying: action.payload.nowPlaying,
      };
    default:
      return { ...state };
  }
};

export default movieReducers;

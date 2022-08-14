import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  item: {},
  similarItems: [],
  video: '',
  isLoading: false,
};

export const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    getMovieDetailFetch: (state, action) => {
      state.isLoading = true;
    },
    getMovieSuccess: (state, action: any) => {
      state.item = action.payload;
      state.isLoading = false;
    },
    setMovieVideo: (state, action: any) => {
      state.video = action.payload;
    },
    setSimilarMovie: (state, action: any) => {
      state.similarItems = action.payload;
    },
    clearResults: state => {
      state = initialState;
    },
  },
});

export const {
  getMovieDetailFetch,
  getMovieSuccess,
  setMovieVideo,
  setSimilarMovie,
} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;

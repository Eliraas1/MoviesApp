import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  results: [],
  isLoading: false,
  page: 1,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovieFetch: state => {
      state.isLoading = true;
    },
    getMovieSuccess: (state, action: any) => {
      state.results = [...state.results, ...action.payload];
      state.page++;
      state.isLoading = false;
    },
    clearResults: state => {
      state = initialState;
    },
  },
});

export const {getMovieFetch, getMovieSuccess} = movieSlice.actions;
export default movieSlice.reducer;

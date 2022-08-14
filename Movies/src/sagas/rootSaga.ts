import {takeLatest} from 'redux-saga/effects';
import {handleGetMovies} from './handlers/movies';
import {getMovieFetch} from '../features/movieSlice';
import {handleGetMovieDetail} from './handlers/movieDetails';
import {getMovieDetailFetch} from '../features/movieDetailsSlice';

export function* watcherSaga() {
  yield takeLatest(getMovieFetch.type, handleGetMovies);
  yield takeLatest(getMovieDetailFetch.type, handleGetMovieDetail);
}

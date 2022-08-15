import {call, put, select} from 'redux-saga/effects';
import {RootState} from '../../app/store';
import {API_URL} from '../../../helpers/constant';
import {getMovieSuccess} from '../../features/movieSlice';
import {requestGetData} from '../requests/movies';

export function* handleGetMovies() {
  const {moviePage} = yield select((state: RootState) => ({
    moviePage: state.movies.page,
  }));
  try {
    const res = yield call(requestGetData, {
      method: 'get',
      url: API_URL + moviePage,
    });
    const dataFormatted = res.data.results;
    yield put(getMovieSuccess(dataFormatted));
  } catch (err) {
    console.log('err in handleGetMovies', err);
  }
}

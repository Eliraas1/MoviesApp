import {call, put} from 'redux-saga/effects';
import {
  getMovieApi,
  getSimilarApi,
  getVideoApi,
} from '../../../helpers/constant';

import {
  getMovieSuccess,
  setMovieVideo,
  setSimilarMovie,
} from '../../features/movieDetailsSlice';
import {requestGetData} from '../requests/movies';

export function* handleGetMovieDetail(action) {
  try {
    const movieResponse = yield call(requestGetData, {
      method: 'get',
      url: getMovieApi(action.payload),
    });
    const videoResponse = yield call(requestGetData, {
      method: 'get',
      url: getVideoApi(action.payload),
    });
    const similarMovie = yield call(requestGetData, {
      method: 'get',
      url: getSimilarApi(action.payload),
    });
    const Trailer = Object.fromEntries(
      Object.entries(videoResponse.data.results).filter(([key, value]: any) => {
        return value.type === 'Trailer';
      }),
    );
    const trailerFormatted: any = Object.values(Trailer);
    const dataFormatted = movieResponse.data;
    const similarMovieFormatted = similarMovie.data;
    yield put(setMovieVideo(trailerFormatted[0].key));
    yield put(setSimilarMovie(similarMovieFormatted.results));
    yield put(getMovieSuccess(dataFormatted));
  } catch (err) {
    console.log('err in handleGetMovies', err);
  }
}

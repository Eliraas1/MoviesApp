import {configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import favoriteReducer from '../features/favoriteSlice';
import userReducer from '../features/userSlice';
import movieReducer from '../features/movieSlice';
import movieDetailsReducer from '../features/movieDetailsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const favoriteConfig = {
  key: 'favoriteReducer',
  version: 1,
  storage: AsyncStorage,
};
const userConfig = {
  key: 'userReducer',
  version: 1,
  storage: AsyncStorage,
};
const movieDetailsConfig = {
  key: 'movieDetailsReducer',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  favorite: persistReducer(favoriteConfig, favoriteReducer),
  user: persistReducer(userConfig, userReducer),
  movies: movieReducer,
  movieDetail: persistReducer(movieDetailsConfig, movieDetailsReducer),
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

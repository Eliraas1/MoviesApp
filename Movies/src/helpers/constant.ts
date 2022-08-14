export const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=a6dce2e16f1f16049dcb8a414c53eae5&language=en-US&page=';
export const API_IMG = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = 'a6dce2e16f1f16049dcb8a414c53eae5';
export const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v=';
export const getMovieApi = movie_id =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=a6dce2e16f1f16049dcb8a414c53eae5&language=en-US`;

export const getSimilarApi = movie_id =>
  `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=a6dce2e16f1f16049dcb8a414c53eae5&language=en-US&page=1`;

export const getVideoApi = movieId =>
  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=a6dce2e16f1f16049dcb8a414c53eae5&language=en-US`;

export const ADULT_ICON =
  'https://st3.depositphotos.com/5903534/14352/v/450/depositphotos_143529825-stock-illustration-adults-only-icon-illustrated-on.jpg';

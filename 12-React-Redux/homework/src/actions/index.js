export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
const API_KEY = "c5f05161";

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=` + titulo
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function setMovieDetail(movie) {
  return {
    type: GET_MOVIE_DETAIL,
    payload: movie,
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=c5f05161&s&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
}

export const addMovieFavorite = (payload) => {
  return { type: ADD_MOVIE_FAVORITE, payload };
};

export function removeMovieFavorite(id) {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id,
  };
}

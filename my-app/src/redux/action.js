import { INIT, ADD_MOVIE, REMOVE_MOVIE } from "./actionType";
import axios from "axios";

export const init = (getList) => ({
  type: INIT,
  getList
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/resources/movies.json")
      .then((res) => {
        const getList = res.data;
        dispatch(init(getList));
      })
      .catch(() => {
        alert("fetch data error.");
      });
  };
};

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    data: movie
  };
};

export const removeMovie = (movie) => {
  return {
    type: REMOVE_MOVIE,
    data: movie
  };
};

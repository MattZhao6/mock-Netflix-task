import React from "react";
import { connect } from "react-redux";
import { addMovie, removeMovie } from "../redux/action";

const Movie = ({ data, type, removeMovie, addMovie }) => {
  return (
    <div className="item">
      <img src={data.img} alt="movie-pic" />
      <div className="title">{data.title}</div>
      <div className="button">
        {type === "Recommendations" ? (
          <button className="block-btn-remove" onClick={() => addMovie(data)}>
            Add
          </button>
        ) : (
          <button className="block-btn-add" onClick={() => removeMovie(data)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovie: (data) => {
      dispatch(removeMovie(data));
    },
    addMovie: (data) => {
      dispatch(addMovie(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(Movie);

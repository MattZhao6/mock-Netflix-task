import React from "react";
import { connect } from "react-redux";
import Movie from "./movie";

const MovieList = ({ type, myList, recommendations }) => {
  const data = type === "My List" ? myList : recommendations;

  return (
    <div className="list">
      <h3 className="header">{type}</h3>
      <div className="items">
        {data.map((movie, index) => (
          <Movie data={movie} key={index} type={type} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myList: state.myList,
  recommendations: state.recommendations
});

export default connect(mapStateToProps)(MovieList);

import React, { Component } from "react";
import { getList } from "./redux/action";
import store from "./redux/store";
import MovieList from "./components/index";
import ListTitle from "./components/listTitle";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    const action = getList();
    store.dispatch(action);
  };

  render() {
    return (
      <div className="main">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix_logo"
          />
        </div>
        <MovieList type="My List" />
        <MovieList type="Recommendations" />
        <ListTitle />
      </div>
    );
  }
}

export default App;

import React from "react";
import { connect } from "react-redux";

const ListTitle = ({ myList }) => {
  return (
    <div className="bottom">
      <h3 className="bottom">My Movie List</h3>
      <ul>
        {myList.map((item) => (
          <li key={item.id} className="bottom-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList
  };
};

export default connect(mapStateToProps)(ListTitle);

import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux-store/actions";

function TodoListFilters({ filter, setFilter }) {
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(TodoListFilters);

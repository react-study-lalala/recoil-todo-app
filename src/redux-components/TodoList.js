import React from "react";
import TodoListFilters from "./TodoListFilters";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import { connect } from "react-redux";
import { getTodoListByVisibilityFilter } from "../redux-store/selectors";

function TodoList({ todoList }) {
  return (
    <>
      {/* <TodoListStats /> */}
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todoList = getTodoListByVisibilityFilter(state, visibilityFilter);

  return { todoList };
};

export default connect(mapStateToProps)(TodoList);
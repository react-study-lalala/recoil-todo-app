import React from "react";
import { filteredTodoListState } from "../store/state";
import { useRecoilValue } from "recoil";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

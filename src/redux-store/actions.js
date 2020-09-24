import { ADD_TODO, SET_FILTER } from "./actionTypes";

export const setTodoList = list => ({
  type: ADD_TODO,
  payload: list
});

export const setFilter = visibilityFilter => ({ type: SET_FILTER, payload: { visibilityFilter } });

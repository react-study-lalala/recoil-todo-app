export const getTodoListState = store => store.todos;

export const getTodoList = store =>
  getTodoListState(store) ? getTodoListState(store).list : [];


export const getTodoListByVisibilityFilter = (store, visibilityFilter) => {
  const list = getTodoList(store);
  switch (visibilityFilter) {
    case "Show Completed":
      return list.filter(todo => todo.isComplete);
    case "Show Uncompleted":
      return list.filter(todo => !todo.isComplete);
    default:
      return list;
  }
};

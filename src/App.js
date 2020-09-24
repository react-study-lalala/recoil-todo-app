import React from "react";
// import TodoList from "./components/TodoList";
// import { RecoilRoot } from "recoil";
import TodoList from "./redux-components/TodoList";
import { Provider } from "react-redux";
import store from "./redux-store/store";

function App() {
  return (
    // <RecoilRoot>
    //   <TodoList></TodoList>
    // </RecoilRoot>
    <Provider store={store}>
      <TodoList></TodoList>
    </Provider>
  );
}
export default App;

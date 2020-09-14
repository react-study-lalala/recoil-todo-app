import React from "react";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <TodoList></TodoList>
    </RecoilRoot>
  );
}
export default App;

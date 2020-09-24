import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodoList } from "../redux-store/selectors";
import { setTodoList } from "../redux-store/actions";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator({ oldTodoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setTodoList([
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const oldTodoList = getTodoList(state);
  return { oldTodoList };
};

export default connect(mapStateToProps, { setTodoList })(TodoItemCreator);

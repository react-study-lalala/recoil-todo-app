import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../store/state";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // get / set, 읽기 전용, 쓰기 전용 등의 구분을 하는 것 같다.
  // 불변성 유지 등의 컨셉. vo, dto에는 set/ getter 들어가지만, 읽기 전용으로 만드는 경우도 있다.

  // useSetRecoilState는 useMemo로 감싸져있음. 상태 값에 대한 메모이제이션을 지원한다.
  // 기존의 사람들이 불편해하던 것을 해소시켜주었다.

  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

import React, { useContext, useRef } from "react";
import { TodosContext } from "../context/todoContext";

const TodoInput = () => {
  const todos = useContext(TodosContext);
  const ref = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    todos.addTodo(ref!.current!.value);
  };
  return (
    <React.Fragment>
      <input ref={ref} data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button" onClick={handleAddTodo}>
        추가
      </button>
    </React.Fragment>
  );
};

export default TodoInput;

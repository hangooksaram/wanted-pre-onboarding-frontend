import React, { ChangeEvent, useContext, useState } from "react";
import { TodosContext } from "../context/todoContext";
import { ItemButtonGroup, EditButtonGroup } from "./TodoItemButtonGroup";
import { Todo } from "../context/todoContext";

const TodoItem = ({ id, todo, isCompleted }: Todo) => {
  const context = useContext(TodosContext);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyInput, setModifyInput] = useState(todo);
  const [isDone, setIsDone] = useState(isCompleted);
  const handleSubmitTodo = (id: number) => {
    context.modifyTodo(id, modifyInput, isCompleted);
    setIsModifyMode(false);
  };

  const handleDeleteTodo = (id: number) => {
    context.deleteTodo(id);
  };

  const handleChangeDone = (e: ChangeEvent<HTMLInputElement>) => {
    context.toggleDoneState(id);
    setIsDone(e.target.checked);
  };
  return (
    <li>
      <label>
        <input checked={isDone} onChange={handleChangeDone} type="checkbox" />
        {isModifyMode ? (
          <input
            value={modifyInput}
            onChange={(e) => setModifyInput(e.target.value)}
            data-testid="modify-input"
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isModifyMode ? (
        <EditButtonGroup
          onSubmitTodo={() => handleSubmitTodo(id)}
          onChangeModifyMode={() => {
            setIsModifyMode(false);
          }}
        />
      ) : (
        <ItemButtonGroup
          onChangeModifyMode={() => setIsModifyMode(true)}
          onDeleteTodo={() => handleDeleteTodo(id)}
        />
      )}
    </li>
  );
};

export default TodoItem;

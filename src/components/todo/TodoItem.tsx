import { ChangeEvent, useContext, useState } from "react";
import { TodosContext } from "../../context/todoContext";
import { ItemButtonGroup, EditButtonGroup } from "./TodoItemButtonGroup";
import { Todo } from "../../context/todoContext";
import ListItem from "../ui/ListItem";
import Input from "../ui/Input";
import { css } from "@emotion/css";

const TodoItem = ({ id, todo, isCompleted }: Todo) => {
  const todos = useContext(TodosContext);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyInput, setModifyInput] = useState(todo);
  const [isDone, setIsDone] = useState(isCompleted);
  const handleModifyTodo = (id: number) => {
    if (modifyInput) {
      todos.modifyTodo(id, modifyInput, isCompleted);
      setIsModifyMode(false);
    } else alert("수정할 할 일을 입력해주세요!");
  };

  const handleDeleteTodo = (id: number) => {
    todos.deleteTodo(id);
  };

  const handleChangeDone = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
    todos.modifyTodo(id, modifyInput, e.target.checked);
  };

  const todoTextStyle = () => css`
    margin-left: 16px;
    ${isCompleted &&
    `
    text-decoration : line-through
  `}
  `;
  return (
    <ListItem>
      <label
        className={css`
          display: flex;
          align-items: center;
          width: 70%;
        `}
      >
        <input
          checked={isDone}
          onChange={(e) => handleChangeDone(e)}
          type="checkbox"
        />
        {isModifyMode ? (
          <Input
            value={modifyInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setModifyInput(e.target.value)
            }
            margin="0px"
            data-testid="modify-input"
          />
        ) : (
          <div className={todoTextStyle()}>{todo}</div>
        )}
      </label>
      <div
        className={css`
          width: 30%;
        `}
      >
        {isModifyMode ? (
          <EditButtonGroup
            onSubmitTodo={() => handleModifyTodo(id)}
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
      </div>
    </ListItem>
  );
};

export default TodoItem;

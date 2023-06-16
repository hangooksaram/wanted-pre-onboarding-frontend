import { KeyboardEventHandler, useContext, useRef } from "react";
import { TodosContext } from "../../context/todoContext";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { css } from "@emotion/css";

const TodoInput = () => {
  const todos = useContext(TodosContext);
  const ref = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (ref!.current!.value) {
      todos.addTodo(ref!.current!.value);
      ref!.current!.value = "";
    } else alert("할 일을 입력해주세요!");
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <header
      className={css`
        display: flex;
      `}
    >
      <Input
        placeholder="할 일을 입력해주세요"
        id="todo-input"
        ref={ref}
        data-testid="new-todo-input"
        onKeyDown={handleKeyDown}
        width="70%"
      />
      <Button
        width="25%"
        borderRadius="5px"
        margin="0px 0px 0px 8px"
        data-testid="new-todo-add-button"
        onClick={handleAddTodo}
      >
        추가
      </Button>
    </header>
  );
};

export default TodoInput;

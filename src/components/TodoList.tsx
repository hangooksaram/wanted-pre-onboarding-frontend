import { useContext, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todoContext";

const TodoList = () => {
  const todos = useContext(TodosContext).items;

  return (
    <ul>
      <TodoInput />
      {todos.map(({ id, todo, isCompleted, userId }) => (
        <TodoItem
          key={id}
          id={id}
          todo={todo}
          isCompleted={isCompleted}
          userId={userId}
        />
      ))}
    </ul>
  );
};

export default TodoList;

import React, { useEffect } from "react";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import TodosContextProvider from "../context/todoContext";
import useRedirect from "../hook/useRedirect";
import LogoutButton from "../components/sign/LogoutButton";

const Todo = () => {
  useRedirect();

  return (
    <TodosContextProvider>
      <h1>할 일</h1>
      <TodoInput />
      <TodoList />
      <LogoutButton />
    </TodosContextProvider>
  );
};

export default Todo;

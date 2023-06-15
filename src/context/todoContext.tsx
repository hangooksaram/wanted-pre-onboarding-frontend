import axios from "axios";
import React, { useState, useEffect } from "react";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../api/todos";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
type TodosContextType = {
  items: Todo[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, todo: string, isCompleted: boolean) => void;
  toggleDoneState: (id: number) => void;
};
export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
  modifyTodo: () => {},
  toggleDoneState: () => {},
});

const getTodosHandler = async () => {
  const { data } = await getTodos();
  return data ? data : [];
};

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await getTodosHandler();
      setTodos(datas);
    };
    fetchDatas();
  }, []);

  const addTodoHandler = async (todo: string) => {
    const res = await createTodo(todo);
    if (res.status === 201) {
      const newTodos = [...todos, res.data!];
      setTodos(newTodos);
    } else {
      alert(res.errorMessage);
    }
  };

  const modifyTodoHandler = async (
    id: number,
    todo: string,
    isCompleted: boolean
  ) => {
    const res = await updateTodo(id, todo, isCompleted);
    if (res.status === 200) {
      const { todo, isCompleted } = res.data!;
      const newTodos = todos.map((item) => {
        if (item.id === id) {
          return { ...item, todo, isCompleted };
        }
        return item;
      });
      setTodos(newTodos);
    } else {
      alert(res.errorMessage);
    }
  };

  const deleteTodoHandler = async (id: number) => {
    const res = await deleteTodo(id);
    if (res.status === 204) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } else {
      alert(res.errorMessage);
    }
  };

  const toggleDoneStateHandler = (id: number): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
    modifyTodo: modifyTodoHandler,
    toggleDoneState: toggleDoneStateHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;

import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../context/todoContext";

const TodoList = () => {
  const todos = useContext(TodosContext).items;

  return (
    <ul>
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

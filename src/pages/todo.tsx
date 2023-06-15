import TodoList from "../components/TodoList";
import TodosContextProvider from "../context/todoContext";
import useRedirect from "../hook/useRedirect";

const Todo = () => {
  useRedirect();
  return (
    <TodosContextProvider>
      <TodoList />
    </TodosContextProvider>
  );
};

export default Todo;

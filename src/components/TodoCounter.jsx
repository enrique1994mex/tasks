import { useContext } from "react";
import { TodoContext } from "../context/AppContext";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} todos
    </h2>
  );
};

export default TodoCounter;

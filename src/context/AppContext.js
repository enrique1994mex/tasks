import { useState, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const completedTodo = item.filter((todo) => todo.completed).length;
  const totalTodos = item.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...item];
    newTodos.push({
      completed: false,
      text,
    });
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = item.filter((todo) => todo.text !== text);
    saveItem(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

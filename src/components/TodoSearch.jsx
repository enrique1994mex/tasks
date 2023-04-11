import { useContext } from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../context/AppContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = ({ target: { value } }) => {
    setSearchValue(value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export default TodoSearch;

import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "../styles/TodoItem.css";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <GiCheckMark />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <RiDeleteBin5Fill />
      </span>
    </li>
  );
};

export default TodoItem;

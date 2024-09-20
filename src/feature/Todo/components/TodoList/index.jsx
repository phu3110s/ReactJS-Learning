import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
ToDoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
ToDoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};
function ToDoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, idx) => {
    // Phải clone ra 1 mảng mới khi làm array

    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}
            className={classnames({
              "todo-item": true,
              completed: todo.status === "completed",
            })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
